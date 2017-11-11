import React from 'react';
import Slider from '../../../../src/components/Slider/Slider';
import fixture from '../../../fixture/popularMovies.json';

describe('Slider', function () {
  beforeEach(() => {
    this.wrapper = shallow(<Slider entries={fixture} />);
  });
  test('should renders slider with slides components', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
