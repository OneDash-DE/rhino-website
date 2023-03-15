import Head from "next/head";
import { LandingPage, LandingPageProps } from "@/components/landing-page";
import apolloClient from "@/logic/apollo-client";
import {
	EventsDocument,
	EventsQuery,
	EventsQueryVariables,
	ExternalContentDocument,
	ExternalContentQuery,
	HomepageDocument,
	HomepageQuery,
	PhotosDocument,
	PhotosQuery,
	SocialMedia,
	SocialMediasDocument,
	SocialMediasQuery,
} from "types/gql-api";
import dayjs from "dayjs";

export default function Home(props: LandingPageProps) {
	const {
		homepage: { attributes },
	} = props;
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{attributes?.metaTitle}</title>
				<meta name="theme-color" content="#1d1d1d" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#1d1d1d" />
				<meta name="description" content={attributes?.metaDescription} />
				<meta http-equiv="content-type" content="text/html" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1.0" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=1.0" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=1.0" />
				<link rel="manifest" href="/icons/site.webmanifest?v=1.0" />
				<link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=1.0" color="#1d1d1d" />
				<link rel="shortcut icon" href="/icons/favicon.ico?v=1.0" />
				<meta name="apple-mobile-web-app-title" content={attributes?.metaTitle} />
				<meta name="application-name" content={attributes?.metaTitle} />
				<meta name="msapplication-TileColor" content="#1d1d1d" />
				<meta name="msapplication-config" content="/icons/browserconfig.xml?v=1.0" />
				<meta name="theme-color" content="#1d1d1d" />
				<meta http-equiv="language" content="en" />
				<meta name="keywords" content={attributes?.metaKeywords} />
				<meta name="page-topic" content="Music, Band" />

				<meta property="og:title" content={attributes?.metaTitle} />
				<meta property="og:site_name" content={attributes?.metaTitle} />
				<meta property="og:url" content={attributes?.metaPageUrl} />
				<meta property="og:description" content={attributes?.metaDescription} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={props.homepage.attributes?.heroImage.data?.attributes?.url} />
			</Head>
			<LandingPage {...props} />
		</>
	);
}

export async function getStaticProps() {
	const socialMediaRes = await apolloClient.query<SocialMediasQuery>({ query: SocialMediasDocument });
	const homepageRes = await apolloClient.query<HomepageQuery>({ query: HomepageDocument });
	const externalRes = await apolloClient.query<ExternalContentQuery>({ query: ExternalContentDocument });
	const eventsRes = await apolloClient.query<EventsQuery, EventsQueryVariables>({
		query: EventsDocument,
		variables: {
			yesterday: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
		},
	});
	const photoRes = await apolloClient.query<PhotosQuery>({ query: PhotosDocument });

	return {
		props: {
			socialMediaLinks: socialMediaRes?.data.socialMedias?.data ?? [],
			homepage: homepageRes?.data.homepage?.data,
			externalContent: externalRes.data,
			events: eventsRes.data.events?.data ?? [],
			photos: photoRes.data.photo?.data?.attributes?.photos.data ?? [],
		} as LandingPageProps,
		revalidate: 60 * 60, // 1 hour
	};
}
