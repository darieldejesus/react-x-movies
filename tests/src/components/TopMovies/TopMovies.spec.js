import React from 'react';
import TopMovies from '../../../../src/components/TopMovies/TopMovies';
import fixture from '../../../fixture/movies.json';

describe('TopMovies', function () {
  beforeEach(() => {
    this.wrapper = shallow(<TopMovies entries={fixture} />);
  });

  test('should renders ListOfMovies', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});

