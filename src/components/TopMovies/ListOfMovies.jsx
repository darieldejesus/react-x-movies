import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import MovieThumbnail from './MovieThumbnail';

const Movies = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListOfMovies = ({ entries }) => (
  <Movies>
    {entries.slice(0, 6).map(entry => (
      <MovieThumbnail key={ entry.title } {...entry} />
    ))}
  </Movies>
);

ListOfMovies.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListOfMovies;
