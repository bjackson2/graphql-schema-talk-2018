const express = require("express");
const { buildSchema, printSchema } = require("graphql");
const { ApolloServer, gql } = require("apollo-server-express");
const { schema } = require("./src/schema");
const { resolvers } = require("./src/resolvers");

const server = new ApolloServer({ typeDefs: gql(schema), resolvers });
const app = express();

app.get("/graphql/schema", (req, res) => {
  return res.send(printSchema(buildSchema(schema)));
});

server.applyMiddleware({ app });

app.listen({ port: 3002 }, () => {
  console.log(`🚀  Server ready at ${server.graphqlPath}`);
});
