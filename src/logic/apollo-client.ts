import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export const BACKEND_SERVER_URL = process.env.BACKEND_SERVER_URL ?? "http://127.0.0.1:1337/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
		);
	}
	if (networkError) {
		console.error(`[Network error]: ${networkError}`);
	}
});
const httpLink = new HttpLink({
	uri: BACKEND_SERVER_URL,
});

const apolloClient = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "no-cache",
			errorPolicy: "all",
		},
		query: {
			fetchPolicy: "no-cache",
			errorPolicy: "all",
		},
	},
});

export default apolloClient;
