import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
  display: block;
  width: 154px;
`;

const Image = Styled.img`
  width: 154px;
  background: red;
  height: 231px;
`;

const MovieName = Styled.h1`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  margin: 10px 0 0;
  color #63676f;
`;

const MovieReleaseDate = Styled.h4`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 600;
  color: #ed0005;
`;

const MovieThumbnail = ({ title, poster_path, release_date }) => (
  <Container>
    <Image src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
    <MovieName>{ title }</MovieName>
    <MovieReleaseDate>({ release_date })</MovieReleaseDate>
  </Container>
);

MovieThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MovieThumbnail;
