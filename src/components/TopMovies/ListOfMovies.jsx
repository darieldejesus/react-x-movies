import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

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
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListOfMovies;
