module.exports.schema = `
  type Artist {
    bio: String
    id: ID!
    name: String!
    songs: [Song!]!
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
