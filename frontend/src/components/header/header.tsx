import { BACKEND_SERVER_URL } from "@/logic/apollo-client";
import Image from "next/image";
import React from "react";
import { SocialMediaEntity } from "types/gql-api";
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";
import styles from "./header.module.sass";

interface HeaderProps {
	socialMediaLinks: SocialMediaEntity[];
}

export const Header = ({ socialMediaLinks }: HeaderProps) => {
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
