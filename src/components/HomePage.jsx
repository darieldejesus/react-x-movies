import React, { Component } from 'react';
import PropType from 'prop-types';

import BasePage from './BasePage';
import Slider from './Slider';
import TopMovies from './TopMovies';

class HomePage extends Component {
  componentDidMount() {
    const { popularMovies } = this.props.popularMovies;
    const { topRatedMovies } = this.props.topRatedMovies;

    if (popularMovies.length === 0) {
      this.props.fetchPopularMovies();
    }

    if (topRatedMovies.length === 0) {
      this.props.fetchTopRatedMovies();
    }
  }

  render() {
    const { popularMovies, topRatedMovies } = this.props;
    return (
      <BasePage>
        <div>
          { popularMovies.isLoading && <h1>Loading...</h1>}
          { !popularMovies.isLoading
            && popularMovies.popularMovies.length
            && <Slider entries={popularMovies.popularMovies} />}
        </div>
        <div>
          <TopMovies entries={topRatedMovies.topRatedMovies} />
        </div>
      </BasePage>
    );
  }
}

HomePage.propTypes = {
  popularMovies: PropType.shape({
    isLoading: PropType.bool.isRequired,
    popularMovies: PropType.array.isRequired,
  }).isRequired,
  topRatedMovies: PropType.shape({
    isLoading: PropType.bool.isRequired,
    topRatedMovies: PropType.array.isRequired,
  }).isRequired,
  fetchPopularMovies: PropType.func.isRequired,
  fetchTopRatedMovies: PropType.func.isRequired,
};

export default HomePage;
