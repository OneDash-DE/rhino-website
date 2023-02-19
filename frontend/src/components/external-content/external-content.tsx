import { useLocalStorage } from "@/logic/use-local-storage-hook";
import classNames from "classnames";
import React, { useId } from "react";
import styles from "./external-content.module.sass";

interface ExternalContentProps {
	src: string;
	type: "youtube" | "spotify";
	onPrivacyPolicyClick: () => void;
}

export const ExternalContent = ({ src, type, onPrivacyPolicyClick }: ExternalContentProps) => {
	const id = useId();
	const [allowYoutube, setAllowYoutube] = useLocalStorage(`allow-${type}`, false, type === "youtube" ? 1 : 2);

	return (
		<div className={classNames(styles.content, styles[type])}>
			{allowYoutube ? (
				<iframe
					title={`External content from ${type}`}
					frameBorder="0"
					allowFullScreen
					allow="encrypted-media; fullscreen"
					src={src}></iframe>
			) : (
				<div>
					<label htmlFor={id}>
						<input onChange={() => setAllowYoutube(true)} id={id} type="checkbox" />
						<span></span>
						<p>I agree to load external content from {type === "youtube" ? "Youtube" : "Spotify"}.</p>
					</label>
					<p className={styles.privacyInfo}>
						I agree to external content being displayed to me. This means that personal data can be transmitted to third-party
						providers and cookies can be used by them. More about this in our{" "}
						<button onClick={() => onPrivacyPolicyClick()}>privacy policy</button>.
					</p>
				</div>
			)}
		</div>
	);
};
