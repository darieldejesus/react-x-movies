import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styled from 'styled-components';

import BasePage from './BasePage';

const MovieContainer = Styled.section`
  width: 750px;
  float: left;
  display: inline-block; 
`;

const SideRecommendedMovies = Styled.section`
  width: 255px;
  float: right;
  display: inline-block;
`;

const MovieTitle = Styled.h1`
  background: #31353d;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

const MovieImage = Styled.img`
  width: 100%;
`;

const RecommendationTitle = Styled.h1`
  background: #ed0105;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

const MovieRecommendations = ({ movies }) => (
  <SideRecommendedMovies>
    <RecommendationTitle>Recommendations</RecommendationTitle>
    <ul>
      { movies && movies.map(({ id, title }) => (
        <li key={id}>
          <a href={`/movie/${id}`}>{id} - { title }</a>
        </li>
      )) }
    </ul>
  </SideRecommendedMovies>
);

MovieRecommendations.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};


class MoviePage extends Component {
  componentWillMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
  }

  render() {
    const { movieDetails, movieRecommendations } = this.props;
    const {
      backdrop_path: backdropPath,
      overview,
      popularity,
      production_companies: productionCompanies,
      release_date: releaseDate,
      title,
      homepage,
      genres,
    } = movieDetails.details;

    return (
      <BasePage>
        <MovieContainer>
          <MovieTitle>{ title }</MovieTitle>
          <MovieImage src={`https://image.tmdb.org/t/p/w780${backdropPath}`} />
          <p>{ overview }</p>

          <h1>Details</h1>
          <hr />
          <h3>Release Date</h3>
          <p>{releaseDate}</p>
          <h3>Homepage</h3>
          <p><a href={homepage}>{ homepage }</a></p>
          <h3>Genres</h3>
          <ul>
            { genres && genres.map(({ id, name }) => <li key={id}>{ name }</li>)}
          </ul>
          <h3>Production Companies</h3>
          <ul>
            { productionCompanies &&
              productionCompanies.map(({ id, name }) => <li key={id}>{ name }</li>)
            }
          </ul>
          <h3>Popularity</h3>
          <p>{ popularity }</p>
        </MovieContainer>
        <MovieRecommendations movies={movieRecommendations.movies} />
      </BasePage>
    );
  }
}

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.string.isRequired,
    },
  }).isRequired,
  movieDetails: PropTypes.shape({
    details: PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      production_companies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      homepage: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  movieRecommendations: PropTypes.shape({
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchMovieDetails: PropTypes.func.isRequired,
};
export default MoviePage;
