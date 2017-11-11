import React from 'react';
import BasePage from '../../../src/components/BasePage';

describe('BasePage', function () {
  beforeEach(() => {
    this.wrapper = shallow(<BasePage><div>Yeey, I am a child</div></BasePage>);
  });

  test('should renders the BasePage component', () => {
    expect(this.wrapper).toMatchSnapshot();
  });
});
