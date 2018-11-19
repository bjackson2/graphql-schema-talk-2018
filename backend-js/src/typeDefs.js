const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  type Artist {
    bio: String
    id: ID!
    name: String!
    songs: [Song!]!
  }

  type Mutation {
    # An example field added by the generator
    testField: String!
  }

  type Query {
    artist(id: ID!): Artist!
    artists: [Artist!]!
  }

  type Song {
    description: String
    durationInSeconds: Int!
    id: ID!
    name: String!
  }
`;
