import React, { Component } from 'react';

import BasePage from './BasePage';
import Slider from './Slider';
import TopMovies from './TopMovies';

class HomePage extends Component {
  componentDidMount () {
    const { popularMovies } = this.props.popularMovies;
    const { topRatedMovies } = this.props.topRatedMovies;

    popularMovies.length === 0 && this.props.fetchPopularMovies();
    topRatedMovies.length === 0 && this.props.fetchTopRatedMovies();
  }

  render () {
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
          <TopMovies entries={topRatedMovies.topRatedMovies}/>
        </div>
      </BasePage>
    );
  }
};

export default HomePage;
