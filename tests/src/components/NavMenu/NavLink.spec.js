import React from 'react';
import NavMenuLink from '../../../../src/components/NavMenu/NavMenuLink';

describe('NavMenuLink', function () {
  beforeEach(() => {
    this.wrapper = shallow(<NavMenuLink href="test_href" label="test_label" />);
  });
  test('should renders NavLinks', () => {
    expect(toJson(this.wrapper)).toMatchSnapshot();
  });
});
