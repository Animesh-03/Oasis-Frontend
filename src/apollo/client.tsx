import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo } from "next-apollo";

const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/graphql`,
    cache: new InMemoryCache(),
    credentials: "include",
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only"
        }        
    }
});

export default withApollo(apolloClient);