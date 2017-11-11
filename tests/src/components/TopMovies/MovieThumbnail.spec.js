import React from 'react';
import MovieThumbnail from '../../../../src/components/TopMovies/MovieThumbnail';
import fixture from '../../../fixture/moviesDetails.json';

describe('MovieThumbnail', function () {
  beforeEach(() => {
    this.wrapper = shallow(<MovieThumbnail {...fixture} />);
  });

  test('should renders ListOfMovies', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
