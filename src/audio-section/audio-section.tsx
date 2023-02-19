import React from "react";
import { ExternalContentQuery, HomepageEntity } from "types/gql-api";
import { ExternalContent } from "../components/external-content/external-content";
import styles from "./audio-section.module.sass";

interface AudioSectionProps {
	externalContent: ExternalContentQuery;
	onPrivacyPolicyClick: () => void;
}

export const AudioSection = ({ externalContent, onPrivacyPolicyClick }: AudioSectionProps) => {
	return (
		<div className="upperspacer" id="audio">
			<h1>Audio</h1>
			<div className={styles.list}>
				<div className={styles.grid}>
					{externalContent.youtubeVideos?.data.map((link) => (
						<ExternalContent
							key={link.id}
							onPrivacyPolicyClick={onPrivacyPolicyClick}
							src={link.attributes!.embeddedLink}
							type="youtube"
						/>
					))}
				</div>
				<div className={styles.grid}>
					{externalContent.spotifyLinks?.data.map((link) => (
						<ExternalContent
							key={link.id}
							onPrivacyPolicyClick={onPrivacyPolicyClick}
							src={link.attributes!.embeddedLink}
							type="spotify"
						/>
					))}
				</div>
			</div>
		</div>
	);
};
