import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
	// Check that the X-API-Key header is set to API_KEY env variable
	if (req.headers["x-api-key"] !== process.env.API_KEY) {
		return res.status(401).send("Invalid API key");
	}

	console.log("Revalidating main page ...");

	try {
		await res.revalidate("/");
		console.log("Revalidating finished");
		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).send("Error revalidating");
	}
};

export default handler;
