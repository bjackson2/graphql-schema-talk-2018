namespace :db do
  desc "Populates some test data"
  task populate: :environment do
    Artist.destroy_all
    Song.destroy_all

    a = Artist.create(
      name: "The Cars",
      bio: "The Cars were an American rock band that emerged from the new wave scene in the late 1970s. The band originated in Boston in 1976, with singer, rhythm guitarist, and songwriter Ric Ocasek; singer, songwriter and bassist Benjamin Orr; lead guitarist Elliot Easton; keyboardist Greg Hawkes; and drummer David Robinson."
    )
    a.songs.create(
      name: "You're All I've Got Tonight",
      description: "A song by the American rock band the Cars, from their debut album, The Cars",
      duration_in_seconds: 253
    )
    a.songs.create(
      name: "Double Life",
      description: "A song by the American rock band the Cars, from their second album, Candy-O",
      duration_in_seconds: 254
    )

    a = Artist.create(
      name: "The Modern Lovers",
      bio: "The Modern Lovers was an American rock band led by Jonathan Richman in the 1970s and 1980s. The original band existed from 1970 to 1974 but their recordings were not released until 1976 or later. It featured Richman and bassist Ernie Brooks with drummer David Robinson (later of The Cars) and keyboardist Jerry Harrison (later of Talking Heads)."
    )
    a.songs.create(
      name: "Roadrunner",
      description: "A song written by Jonathan Richman and recorded in various versions by Richman and his band, in most cases credited as the Modern Lovers",
      duration_in_seconds: 244
    )
    a.songs.create(
      name: "Pablo Picasso",
      description: "A song written by Jonathan Richman for the proto punk group the Modern Lovers. The song was recorded in 1972 at Whitney Studios in Los Angeles, and produced by John Cale, but was not released until 1976, on the Modern Lovers' self-titled debut album.",
      duration_in_seconds: 255
    )
  end
end
