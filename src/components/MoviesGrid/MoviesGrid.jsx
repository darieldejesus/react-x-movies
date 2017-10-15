import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import MovieGridThumbnail from "./MovieGridThumbnail";

const Container = Styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
`;

const MoviesGrid = ({ movies }) => (
  <Container>
    {movies.map(entry => (
      <MovieGridThumbnail key={entry.id} {...entry} />
    ))}
  </Container>
);

MoviesGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    popularity: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  })).isRequired
};

export default MoviesGrid;
