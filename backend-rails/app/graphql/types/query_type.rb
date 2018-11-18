module Types
  class QueryType < Types::BaseObject
    field :artist, Types::Artist, null: false do
      argument :id, ID, required: true
    end

    field :artists, [Types::Artist], null: false

    def artist(id:)
      ::Artist.find(id)
    end

    def artists
      ::Artist.all
    end
  end
end
