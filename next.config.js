/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost", "127.0.0.1", "rhino-strapi-files.s3.eu-central-1.amazonaws.com"],
	},
};

module.exports = nextConfig;
