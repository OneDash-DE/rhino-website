import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { UploadFileEntity } from "types/gql-api";
import Image from "next/image";
import { BACKEND_SERVER_URL } from "@/logic/apollo-client";
import styles from "./photos.module.sass";

interface PhotosProps {
	photos: UploadFileEntity[];
}

export const Photos = (props: PhotosProps) => {
	return (
		<div id="photos" className="upperspacer">
			<h1>Photos</h1>
			<div className={styles.photos}>
				<Gallery>
					{props.photos.map((photo) => {
						const thumbnailUrl = `${photo.attributes?.url}?w=${250}&q=${75}`;
						return (
							<Item
								key={photo.id}
								original={`${BACKEND_SERVER_URL}${photo.attributes?.url}`}
								width={photo.attributes?.width ?? 0}
								caption={photo.attributes?.caption ?? ""}
								height={photo.attributes?.height ?? 0}>
								{({ ref, open }) => (
									// eslint-disable-next-line @next/next/no-img-element
									<Image
										ref={ref as any}
										width={150}
										height={150}
										alt={photo.attributes?.alternativeText ?? ""}
										onClick={open}
										src={thumbnailUrl}
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
