import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import ListOfMovies from './ListOfMovies';

const Title = Styled.h1`
  font-size: 2rem;
  color: #ed0005;
  margin: 0;
`;

const MovieContainer = Styled.section`
  padding: 60px 0;
`;

const TopMovies = ({ entries }) => (
  <MovieContainer>
    <Title key="title">Top 6 Movies</Title>,
    <ListOfMovies entries={entries} />
  </MovieContainer>
);

TopMovies.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  })).isRequired,
};

export default TopMovies;
