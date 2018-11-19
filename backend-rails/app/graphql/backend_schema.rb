class BackendSchema < GraphQL::Schema
  query(Types::QueryType)

  use ApolloTracing.new
end
