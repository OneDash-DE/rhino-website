export const generateSpotifyIframe = (src: string) => {
	return `
    <iframe
    src="${src}"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media; fullscreen"
    ></iframe>`;
};

export const generateYoutubeIframe = (src: string) => {
	return `<iframe frameborder="0" allowtransparency="true" allow="encrypted-media; fullscreen" src="${src}"></iframe>`;
};
