module Types
  class Song < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :durationInSeconds, Int, null: false
  end
end
