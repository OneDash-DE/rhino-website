import classNames from "classnames";
import Image from "next/image";
import { SocialMediaEntity } from "types/gql-api";
import styles from "./social-media-icons.module.sass";

export interface SocialMediaIconsProps {
	socialMediaLinks: SocialMediaEntity[];
	className?: string;
}

export const SocialMediaIcons = ({ socialMediaLinks, className }: SocialMediaIconsProps) => {
	return (
		<div className={classNames(styles.icons, className)}>
			{socialMediaLinks.map((s) => (
				<a
					key={s.id}
					href={s.attributes?.url}
					target="_blank"
					rel="noreferrer"
					aria-label={`Go to ${s.attributes?.logo.data?.attributes?.alternativeText ?? ""}`}>
					{s.attributes?.logo.data?.attributes?.url && (
						<Image
							src={s.attributes?.logo.data?.attributes?.url}
							alt={s.attributes?.logo.data?.attributes.alternativeText ?? ""}
							width="35"
							height="35"
						/>
					)}
				</a>
			))}
		</div>
	);
};
