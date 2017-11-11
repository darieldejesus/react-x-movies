import React from 'react';
import MoviesGrid from '../../../../src/components/MoviesGrid/MoviesGrid';
import fixture from '../../../fixture/movies.json';

describe('MovieGrid', function () {
  beforeEach(() => {
    this.wrapper = shallow(<MoviesGrid movies={fixture} />);
  });

  test('should renders MovieGrid', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
