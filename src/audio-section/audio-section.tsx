import React from "react";
import { ExternalContentQuery } from "types/gql-api";
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
				<div className={styles.list}>
					{externalContent.youtubeVideos?.map((link) => (
						<ExternalContent
							key={link?.documentId}
							onPrivacyPolicyClick={onPrivacyPolicyClick}
							src={link!.embeddedLink}
							type="youtube"
						/>
					))}
				</div>
				<div className={styles.grid}>
					{externalContent.spotifyLinks?.map((link) => (
						<ExternalContent
							key={link?.documentId}
							onPrivacyPolicyClick={onPrivacyPolicyClick}
							src={link!.embeddedLink}
							type="spotify"
						/>
					))}
				</div>
			</div>
		</div>
	);
};
