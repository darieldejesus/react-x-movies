import React from 'react';
import MovieGridThumbnail from '../../../../src/components/MoviesGrid/MovieGridThumbnail';
import fixture from '../../../fixture/moviesDetails.json';

describe('MoviesGridThumbnail', function () {
  beforeEach(() => {
    this.wrapper = shallow(<MovieGridThumbnail {...fixture} />);
  });

  test('should renders the MoviesGridThumbnail', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
