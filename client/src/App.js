import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ArtistList from "./components/ArtistList";

const client = new ApolloClient({
  uri: "http://localhost:3002/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ArtistList />
  </ApolloProvider>
);

export default App;
