import Image from "next/image";
import React from "react";
import { HomepageEntity, SocialMediaEntity } from "types/gql-api";
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";
import styles from "./header.module.sass";

interface HeaderProps {
	socialMediaLinks: SocialMediaEntity[];
	homepage: HomepageEntity;
}

export const Header = ({ socialMediaLinks, homepage }: HeaderProps) => {
	const logo = homepage.attributes?.logoImage?.data?.attributes;
	return (
		<header className={styles.header}>
			<SocialMediaIcons socialMediaLinks={socialMediaLinks} />
			<div style={logo?.url ? { padding: "0.5rem 0" } : {}}>
				{logo?.url ? (
					<div
						style={{
							position: "relative",
							width: "clamp(350px, 60vw, 850px)",
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
