import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasePage from './BasePage';
import MoviesGrid from './MoviesGrid';


class PopularPage extends Component {
  constructor(props) {
    super(props);

    // We should keep the same reference in order to remove the scroll event.
    this.onScrollListener = this.onScrollListener.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.props.popularSectionMovies;
    if (currentPage === 1) {
      this.getMoreMovies();
    }
    window.addEventListener('scroll', this.onScrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollListener);
  }

  onScrollListener() {
    // @todo Use a debounce.
    // @todo Add event to check the onResize
    const { scrollHeight } = this.props;
    const currentHeight = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight - scrollHeight;
    if (currentHeight >= documentHeight) {
      this.getMoreMovies();
    }
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

PopularPage.defaultProps = {
  scrollHeight: 500,
};

PopularPage.propTypes = {
  popularSectionMovies: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchPopularMovies: PropTypes.func.isRequired,
  scrollHeight: PropTypes.number,
};

export default PopularPage;
