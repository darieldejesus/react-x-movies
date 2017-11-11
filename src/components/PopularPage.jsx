import React, { Component } from 'react';

import BasePage from './BasePage';
import MoviesGrid from "./MoviesGrid";

class PopularPage extends Component {
  getMoreMovies () {
    const { currentPage, isLoading } = this.props.popularSectionMovies;
    !isLoading && this.props.fetchPopularMovies(currentPage);
  }

  componentDidMount () {
    const { currentPage } = this.props.popularSectionMovies;
    currentPage === 1 && this.getMoreMovies();
    this.onScrollListener();
  }

  // remove window on componentWillUnmount

  onScrollListener () {
    // use a debounce.
    // add event to check the onResize
    window.addEventListener('scroll', () => {
      const currentHeight = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight - 500;
      currentHeight >= documentHeight
      && this.getMoreMovies();
    });
  }

  render () {
    const { popularSectionMovies } = this.props;
    return (
      <BasePage>
          { popularSectionMovies.popularSectionMovies.length
            && <MoviesGrid movies={popularSectionMovies.popularSectionMovies} />}
      </BasePage>
    );
  }
};

export default PopularPage;
