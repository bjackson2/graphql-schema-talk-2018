module Types
  class Artist < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :bio, String, null: true
    field :songs, [Types::Song], null: false
  end
end
