const { ApolloEngineLauncher } = require("apollo-engine");

const launcher = new ApolloEngineLauncher({
  origins: [
    {
      http: {
        url: "http://localhost:4000/graphql"
      }
    }
  ],
  frontends: [
    {
      port: 3002,
      endpoints: ["/graphql"]
    }
  ]
});

// Start the Proxy; crash on errors.
launcher.start().catch(err => {
  throw err;
});
