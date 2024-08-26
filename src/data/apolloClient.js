import { ApolloClient, InMemoryCache } from "@apollo/client";

let api = process.env.NEXT_PUBLIC_API_URL;
// console.log("api : ",api)
const client = new ApolloClient({
  uri: `${api}/graphql`,
  cache: new InMemoryCache(),
});

export default client;