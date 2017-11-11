import React from 'react';
import HomePage from "../../../src/components/HomePage";
import fixture from '../../fixture/movies.json';

describe('HomePage', function () {
  beforeEach(() => {
    this.fetchPopularMovies = sinon.spy();
    this.fetchTopRatedMovies = sinon.spy();

    const popular = Object.assign({}, fixture[0], {
      isLoading: true,
      popularMovies: fixture,
    });
    const topRated = Object.assign({}, fixture[1], {
      isLoading: true,
      topRatedMovies: fixture,
    });

    this.wrapper = shallow(<HomePage
      popularMovies={popular}
      topRatedMovies={topRated}
      fetchPopularMovies={this.fetchPopularMovies}
      fetchTopRatedMovies={this.fetchTopRatedMovies}
    />);
  });

  test('should renders homepage when is loading', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });

  test('should renders homepage when is not loading', () => {
    this.wrapper.setProps({
      popularMovies: {
        isLoading: false,
        popularMovies: fixture,
      },
    });

    expect(toJson(this.wrapper)).toMatchSnapshot();
  });

  test('should execute "fetchPopularMovies" and "fetchTopRatedMovies"', () => {
    expect(this.fetchPopularMovies.callCount).toEqual(0);
    expect(this.fetchTopRatedMovies.callCount).toEqual(0);

    this.wrapper.setProps({
      popularMovies: { popularMovies: [], isLoading: true },
      topRatedMovies: { topRatedMovies: [], isLoading: true },
    });

    this.wrapper.instance().componentDidMount();

    expect(this.fetchPopularMovies.callCount).toEqual(1);
    expect(this.fetchTopRatedMovies.callCount).toEqual(1);
  });
});
