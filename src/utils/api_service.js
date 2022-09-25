import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const API_URL = "https://api-mumbai.lens.dev/";

const httpLink = createHttpLink({ uri: API_URL });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access_token");

  return {
    headers: {
      ...headers,
      "x-access-token": token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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

export const executeMutation = (mutation, request) => {
  return apolloClient.mutate({
    mutation: gql(mutation),
    variables: {
      request,
    },
  });
};
