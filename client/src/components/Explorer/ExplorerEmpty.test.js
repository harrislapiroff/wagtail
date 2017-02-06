import React from 'react';
import { shallow } from 'enzyme';

import ExplorerEmpty from './ExplorerEmpty';

describe('ExplorerEmpty', () => {
  it('exists', () => {
    expect(ExplorerEmpty).toBeDefined();
  });

  it('basic', () => {
    expect(shallow(<ExplorerEmpty />)).toMatchSnapshot();
  });
});
