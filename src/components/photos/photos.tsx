import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { UploadFileEntity } from "types/gql-api";
import Image from "next/image";
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
						return (
							<Item
								key={photo.id}
								original={photo.attributes?.url}
								width={photo.attributes?.width ?? 0}
								caption={photo.attributes?.caption ?? ""}
								height={photo.attributes?.height ?? 0}>
								{({ ref, open }) => (
									// eslint-disable-next-line @next/next/no-img-element
									<Image
										ref={ref as any}
										width={250}
										height={250}
										alt={photo.attributes?.alternativeText ?? ""}
										onClick={open}
										src={photo.attributes?.url ?? ""}
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
