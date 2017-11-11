import React from 'react';
import 'jest-styled-components';

import NavMenu from '../../../../src/components/NavMenu/NavMenu';

describe('NavMenu', function() {
  beforeEach(() => {
    this.wrapper = shallow(<NavMenu />).dive();
  });

  test('should renders navigation elements', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
