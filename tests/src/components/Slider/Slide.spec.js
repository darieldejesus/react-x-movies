import React from 'react';
import Slide from '../../../../src/components/Slider/Slide';
import fixture from '../../../fixture/popularMovies.json';

describe('Slide', function () {
  beforeEach(() => {
    const entry = fixture[0];
    this.wrapper = shallow(<Slide
      active={true}
      key={entry.id}
      image={entry.backdrop_path}
      overview={entry.overview}
      preLoad={true}
      rate={entry.vote_average}
      release={entry.release_date}
      title={entry.title}
    />);
  });

  test('should renders Slide', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
