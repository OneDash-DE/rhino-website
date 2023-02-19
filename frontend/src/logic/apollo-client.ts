import { ApolloClient, InMemoryCache } from "@apollo/client";

export const BACKEND_SERVER_URL = "http://127.0.0.1:1337";
const apolloClient = new ApolloClient({
	uri: "http://127.0.0.1:1337/graphql",
	cache: new InMemoryCache(),
});

export default apolloClient;
