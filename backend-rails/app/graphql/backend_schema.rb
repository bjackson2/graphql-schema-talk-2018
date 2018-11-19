class BackendSchema < GraphQL::Schema
  query(Types::QueryType)
end
