import React from "react";
import { AboutSection } from "./about";
import { AudioSection } from "../audio-section/audio-section";
import { EventsSection } from "./events-section/events-section";
import { Header } from "./header/header";
import { HeroImage } from "./hero-image/hero-image";
import { Navigation } from "./navigation/navigation";
import { Photos } from "./photos/photos";
import { Footer } from "./footer/footer";
import { ContentDialog } from "@/dialogs/content-dialog";
import { useLocalStorage } from "@/logic/use-local-storage-hook";
import ReactMarkdown from "react-markdown";
import { CookieInfo } from "./cookie-info";
import { EventsQuery, ExternalContentQuery, HomepageQuery, PhotosQuery, SocialMediasQuery } from "types/gql-api";

export interface LandingPageProps {
	socialMediaLinks: SocialMediasQuery["socialMedias"];
	homepage: HomepageQuery["homepage"];
	externalContent: ExternalContentQuery;
	events: EventsQuery["events"];
	photo: PhotosQuery["photo"];
}

export const LandingPage = (props: LandingPageProps) => {
	const [privacyPolicyDialogOpen, setPrivacyPolicyDialogOpen] = React.useState(false);
	const [termsAndConditionsDialogOpen, setTermsAndConditionsDialogOpen] = React.useState(false);
	const [imprintDialogOpen, setImprintDialogOpen] = React.useState(false);
	const [allowYoutube, setAllowYoutube] = useLocalStorage(`allow-youtube`, false, 1);
	const [allowSpotify, setAllowSpotify] = useLocalStorage(`allow-spotify`, false, 2);

	return (
		<div id="home">
			<Header socialMediaLinks={props.socialMediaLinks} homepage={props.homepage} />
			<Navigation socialMediaLinks={props.socialMediaLinks} />
			<HeroImage homepage={props.homepage} />

			<div className="content-wrapper">
				<AboutSection homepage={props.homepage} />
				<EventsSection homepage={props.homepage} events={props.events} />
				<AudioSection onPrivacyPolicyClick={() => setPrivacyPolicyDialogOpen(true)} externalContent={props.externalContent} />
				<Photos photos={props.photo} />
			</div>

			<Footer
				onPrivacyPolicyClick={() => setPrivacyPolicyDialogOpen(true)}
				onImprintClick={() => setImprintDialogOpen(true)}
				onTermsAndConditionsClick={() => setTermsAndConditionsDialogOpen(true)}
			/>

			<ContentDialog isOpen={privacyPolicyDialogOpen} onClose={() => setPrivacyPolicyDialogOpen(false)}>
				<ReactMarkdown>{props.homepage?.privacyPolicy ?? ""}</ReactMarkdown>
				<h2>External Content Consent</h2>
				<p>
					We use external content from Youtube and Spotify. If you want to see this content, please check the boxes below. If you
					do not want to see this content and share your data with these services, you can uncheck the boxes. <br />
					You can change your consent at any time.
				</p>
				<div>
					<div>
						<input
							id="content-youtube"
							type={"checkbox"}
							checked={allowYoutube}
							onChange={(e) => setAllowYoutube(e.target.checked)}
						/>
						<label htmlFor="content-youtube">I agree to load external content from Youtube.</label>
					</div>
					<div>
						<input
							id="consent-spotify"
							type={"checkbox"}
							checked={allowSpotify}
							onChange={(e) => setAllowSpotify(e.target.checked)}
						/>
						<label htmlFor="consent-spotify">I agree to load external content from Spotify.</label>
					</div>
				</div>
			</ContentDialog>
			<ContentDialog isOpen={imprintDialogOpen} onClose={() => setImprintDialogOpen(false)}>
				<ReactMarkdown>{props.homepage?.imprint ?? ""}</ReactMarkdown>
			</ContentDialog>
			<ContentDialog isOpen={termsAndConditionsDialogOpen} onClose={() => setTermsAndConditionsDialogOpen(false)}>
				<ReactMarkdown>{props.homepage?.termsAndConditions ?? ""}</ReactMarkdown>
			</ContentDialog>

			<CookieInfo onPrivacyPolicyClick={() => setPrivacyPolicyDialogOpen(true)} />
		</div>
	);
};
