import { ApolloClient, InMemoryCache } from "@apollo/client";

export const BACKEND_SERVER_URL = process.env.BACKEND_SERVER_URL ?? "http://127.0.0.1:1337/graphql";
const apolloClient = new ApolloClient({
	uri: BACKEND_SERVER_URL,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "no-cache",
		},
		query: {
			fetchPolicy: "no-cache",
		},
	},
});

export default apolloClient;
