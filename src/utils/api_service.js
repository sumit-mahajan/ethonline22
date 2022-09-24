import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const APIURL = "https://api-mumbai.lens.dev/";

export const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export const executeQuery = async (query, request) => {
  const result = await apolloClient.query({
    query: gql(query),
    variables: {
      request,
    },
  });

  return result.data;
};
