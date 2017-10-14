import React, { Component } from 'react';

import Slider from './Carousel/Slider';
import BasePage from './BasePage';

const HomePage = () => {
  const { popularMovies } = this.props;
  return (
    <BasePage>
      {popularMovies.length && <Slider entries={popularMovies} />}
    </BasePage>
  );
};

export default HomePage;
