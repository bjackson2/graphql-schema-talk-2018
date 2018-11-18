class Song < ApplicationRecord
  belongs_to :artist

  validates :name, :duration_in_seconds, presence: true
end
