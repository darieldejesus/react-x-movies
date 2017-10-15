import React, { Component } from 'react';

import Slider from './Carousel/Slider';
import BasePage from './BasePage';
import TopMovies from "./TopMovies/TopMovies";

class HomePage extends Component {
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
