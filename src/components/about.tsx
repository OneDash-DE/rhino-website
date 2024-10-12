import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./about.module.sass";
import { HomepageQuery } from "types/gql-api";

interface AboutSectionProps {
	homepage: HomepageQuery["homepage"];
}

export const AboutSection = ({ homepage }: AboutSectionProps) => {
	return (
		<div id="about" className="upperspacer" style={{ marginTop: "10px" }}>
			<h1>About</h1>
			<div>
				<ReactMarkdown>{homepage?.aboutText ?? ""}</ReactMarkdown>
			</div>
		</div>
	);
};
