import React from 'react';
import Song from './Song';

const Artist = ({artist: {name, bio, songs}}) => (
  <div>
    <h2>{name}</h2>
    <h3>Biography</h3>
    <p>{bio}</p>
    <h3>Songs</h3>
    <div>
      {songs.map((song, index) => (
        <Song key={index} song={song} />
      ))}
    </div>
  </div>
);

export default Artist;
