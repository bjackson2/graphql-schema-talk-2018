import React from 'react';
import ArtistList from './ArtistList';
import FeaturedArtist from './FeaturedArtist';

const ArtistApp = () => (
  <div>
    <h1>Artists App</h1>
    <FeaturedArtist />
    <ArtistList />
  </div>
);

export default ArtistApp;
