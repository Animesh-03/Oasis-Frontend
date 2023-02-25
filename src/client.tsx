import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri:"localhost:8080",
    cache:new InMemoryCache()
});

export default client;