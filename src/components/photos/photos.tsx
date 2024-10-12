import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import styles from "./photos.module.sass";
import { PhotosQuery } from "types/gql-api";

interface PhotosProps {
	photos: PhotosQuery["photo"];
}

export const Photos = (props: PhotosProps) => {
	return (
		<div id="photos" className="upperspacer">
			<h1>Photos</h1>
			<div className={styles.photos}>
				<Gallery>
					{props.photos?.photos.map((photo) => {
						return (
							<Item
								key={photo?.documentId}
								original={photo?.url}
								width={photo?.width ?? 0}
								caption={photo?.caption ?? ""}
								height={photo?.height ?? 0}>
								{({ ref, open }) => (
									// eslint-disable-next-line @next/next/no-img-element
									<Image
										ref={ref as any}
										width={250}
										height={250}
										alt={photo?.alternativeText ?? ""}
										onClick={open}
										src={photo?.url ?? ""}
										style={{ objectFit: "cover" }}
										className={styles.thumbnail}
									/>
								)}
							</Item>
						);
					})}
				</Gallery>
			</div>
		</div>
	);
};
