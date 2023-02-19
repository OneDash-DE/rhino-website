import { ImageLoader } from "next/image";
import { BACKEND_SERVER_URL } from "./apollo-client";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
	return `${BACKEND_SERVER_URL}${src ?? ""}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
