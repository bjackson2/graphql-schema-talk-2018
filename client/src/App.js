import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import ArtistApp from './components/ArtistApp';

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <ArtistApp />
  </ApolloProvider>
);

export default App;
