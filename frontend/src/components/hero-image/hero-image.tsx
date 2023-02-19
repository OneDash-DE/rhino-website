import { BACKEND_SERVER_URL } from "@/logic/apollo-client";
import Image from "next/image";
import React from "react";
import { HomepageEntity } from "types/gql-api";
import styles from "./hero-image.module.sass";

interface HeroImageProps {
	homepage: HomepageEntity;
}

export const HeroImage = (props: HeroImageProps) => {
	const img = props.homepage.attributes?.heroImage.data?.attributes;
	const src = `${BACKEND_SERVER_URL}${img?.url ?? ""}`;
	return (
		<div className={styles.heroImageWrapper} style={{ paddingBottom: `${((img?.height ?? 0) / (img?.width ?? 0)) * 100}%` }}>
			<Image priority fill src={img?.url ?? ""} alt={img?.alternativeText ?? ""} style={{ objectFit: "cover" }} />
		</div>
	);
};
