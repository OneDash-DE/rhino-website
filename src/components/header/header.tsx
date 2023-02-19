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
	const logoUrl = homepage.attributes?.logoImage?.data?.attributes?.url;
	console.log(logoUrl);
	return (
		<header className={styles.header}>
			<SocialMediaIcons socialMediaLinks={socialMediaLinks} />
			<div>
				<h1 id="home" className={styles.headerText}>
					The Rhino
				</h1>
			</div>
			<div />
		</header>
	);
};
