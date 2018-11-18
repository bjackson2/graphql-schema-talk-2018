class AddSongsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :description
      t.integer :duration_in_seconds
      t.references :artist, foreign_key: true, index: true
      t.timestamps
    end
  end
end
