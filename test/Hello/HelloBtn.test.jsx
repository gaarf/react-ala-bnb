import React from 'react';
import { shallow } from 'enzyme';
import HelloBtn from '../../src/components/HelloBtn';

describe('HelloBtn', () => {
  let ctnr;

  beforeEach(() => {
    ctnr = shallow(<HelloBtn onClick={jest.fn()}>hi</HelloBtn>);
  });

  it('looks alright', () => {
    expect(ctnr).toMatchSnapshot();
  });
});
