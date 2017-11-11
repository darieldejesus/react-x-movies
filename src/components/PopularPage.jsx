import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasePage from './BasePage';
import MoviesGrid from './MoviesGrid';


class PopularPage extends Component {
  componentDidMount() {
    const { currentPage } = this.props.popularSectionMovies;
    if (currentPage === 1) {
      this.getMoreMovies();
    }
    this.onScrollListener();
  }

  // remove window on componentWillUnmount
  onScrollListener() {
    // use a debounce.
    // add event to check the onResize
    window.addEventListener('scroll', () => {
      const currentHeight = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight - 500;
      if (currentHeight >= documentHeight) {
        this.getMoreMovies();
      }
    });
  }

  getMoreMovies() {
    const { currentPage, isLoading } = this.props.popularSectionMovies;
    if (!isLoading) {
      this.props.fetchPopularMovies(currentPage);
    }
  }

  render() {
    const { popularSectionMovies } = this.props;
    return (
      <BasePage>
        {popularSectionMovies.popularSectionMovies.length &&
          <MoviesGrid movies={popularSectionMovies.popularSectionMovies} />
        }
      </BasePage>
    );
  }
}

PopularPage.propTypes = {
  popularSectionMovies: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchPopularMovies: PropTypes.func.isRequired,
};

export default PopularPage;
