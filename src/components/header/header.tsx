import Image from "next/image";
import React from "react";
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";
import styles from "./header.module.sass";
import { HomepageQuery, SocialMediasQuery } from "types/gql-api";

interface HeaderProps {
	socialMediaLinks: SocialMediasQuery["socialMedias"];
	homepage: HomepageQuery["homepage"];
}

export const Header = ({ socialMediaLinks, homepage }: HeaderProps) => {
	const logo = homepage?.logoImage;
	return (
		<header className={styles.header}>
			<SocialMediaIcons socialMediaLinks={socialMediaLinks} />
			<div style={logo?.url ? { padding: "0.75rem 0" } : {}}>
				{logo?.url ? (
					<div
						style={{
							position: "relative",
							width: "clamp(200px, 55vw, 700px)",
							paddingBottom: `${((logo.height ?? 0) / (logo.width ?? 0)) * 100}%`,
						}}>
						<Image fill src={logo.url} alt="The Rhino" />
					</div>
				) : (
					<h1 id="home" className={styles.headerText}>
						The Rhino
					</h1>
				)}
			</div>
			<div />
		</header>
	);
};
