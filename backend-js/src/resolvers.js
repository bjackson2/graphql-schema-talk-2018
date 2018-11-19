const { seedData } = require("./seedData");

module.exports.resolvers = {
  Query: {
    artist: (_parent, args, _ctx, _info) =>
      seedData.artists.find(artist => artist.id === artist.id),
    artists: () => seedData.artists
  }
};
