import { ApolloClient, InMemoryCache } from "@apollo/client";

let api = process.env.api_url;
// console.log("api : ",api)
const client = new ApolloClient({
  uri: `${api}/graphql`,
  cache: new InMemoryCache(),
});

export default client;