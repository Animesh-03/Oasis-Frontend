import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo } from "next-apollo";

const apolloClient = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only"
        }        
    }
});

export default withApollo(apolloClient);