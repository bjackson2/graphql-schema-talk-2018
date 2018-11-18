import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Artist from "./Artist";

const ARTISTS_QUERY = gql`
  query ArtistsQuery {
    artists {
      id
      name
      bio
      songs {
        id
        name
        description
        durationInMinutes
      }
    }
  }
`;

const ArtistList = () => (
  <Query query={ARTISTS_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          {data.artists.map(artist => (
            <Artist artist={artist} />
          ))}
        </div>
      );
    }}
  </Query>
);

export default ArtistList;
