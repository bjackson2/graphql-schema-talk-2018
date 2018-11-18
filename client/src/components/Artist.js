import React from "react";
import Song from "./Song";

const Artist = ({ name, bio, songs }) => (
  <div>
    <h1>{name}</h1>
    <h3>Biography</h3>
    <p>{bio}</p>
    <h3>Songs</h3>
    <p>
      {songs.map(song => (
        <Song song={song} />
      ))}
    </p>
  </div>
);

export default Artist;
