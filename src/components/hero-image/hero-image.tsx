import Image from "next/image";
import React from "react";
import { HomepageQuery } from "types/gql-api";
import styles from "./hero-image.module.sass";

interface HeroImageProps {
	homepage: HomepageQuery["homepage"];
}

export const HeroImage = (props: HeroImageProps) => {
	const img = props.homepage?.heroImage;
	return (
		<div className={styles.heroImageWrapper} style={{ paddingBottom: `${((img?.height ?? 0) / (img?.width ?? 0)) * 100}%` }}>
			<Image priority fill src={img?.url ?? ""} alt={img?.alternativeText ?? ""} style={{ objectFit: "cover" }} />
		</div>
	);
};
