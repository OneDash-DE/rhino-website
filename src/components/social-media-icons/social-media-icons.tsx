import classNames from "classnames";
import Image from "next/image";
import styles from "./social-media-icons.module.sass";
import { SocialMediasQuery } from "types/gql-api";

export interface SocialMediaIconsProps {
	socialMediaLinks: SocialMediasQuery["socialMedias"];
	className?: string;
}

export const SocialMediaIcons = ({ socialMediaLinks, className }: SocialMediaIconsProps) => {
	return (
		<div className={classNames(styles.icons, className)}>
			{socialMediaLinks.map((s) => (
				<a
					key={s?.documentId}
					href={s?.url}
					target="_blank"
					rel="noreferrer"
					aria-label={`Go to ${s?.logo?.alternativeText ?? ""}`}>
					{s?.logo?.url && <Image src={s?.logo?.url} alt={s?.logo?.alternativeText ?? ""} width="35" height="35" />}
				</a>
			))}
		</div>
	);
};
