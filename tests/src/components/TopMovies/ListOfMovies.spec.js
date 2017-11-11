import React from 'react';
import ListOfMovies from '../../../../src/components/TopMovies/ListOfMovies';
import fixture from '../../../fixture/movies.json';

describe('ListOfMovies', function () {
  beforeEach(() => {
    this.wrapper = shallow(<ListOfMovies entries={fixture} />);
  });

  test('should renders ListOfMovies', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});