import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const FEATURED_ARTIST_QUERY = gql`
  query FeaturedArtist($id: ID!) {
    artist(id: $id) {
      id
      name
      bio
    }
  }
`;

const FeaturedArtist = () => (
  <Query query={FEATURED_ARTIST_QUERY} variables={{id: 6}}>
    {({data, loading}) => {
      if (loading) return <div>Loading...</div>;

      return (
        <div>
          <h2>Featured Artist</h2>
          <div style={{border: '1px solid black'}}>
            <h3>{data.artist.name}</h3>
            <h4>Biography</h4>
            <p>{data.artist.bio}</p>
          </div>
        </div>
      );
    }}
  </Query>
);

export default FeaturedArtist;
