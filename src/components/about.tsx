import React from "react";
import ReactMarkdown from "react-markdown";
import { HomepageEntity } from "types/gql-api";
import styles from "./about.module.sass";

interface AboutSectionProps {
	homepage: HomepageEntity;
}

export const AboutSection = ({ homepage }: AboutSectionProps) => {
	return (
		<div id="about" className="upperspacer" style={{ marginTop: "10px" }}>
			<h1>About</h1>
			<div>
				<ReactMarkdown>{homepage.attributes?.aboutText ?? ""}</ReactMarkdown>
			</div>
		</div>
	);
};
