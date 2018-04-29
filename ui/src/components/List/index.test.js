import React from 'react';

import {shallow} from 'enzyme';

import List from './index.js';

const migrations = [
    {
      id: 1,
      uploadDate: "2017-11-03",
      fileName: "xxx1.csv"
    },
    {
      id: 2,
      uploadDate: "2017-11-13",
      fileName: "xxx2.csv"
    }
];

describe('Test migration list', function() {
  it('should render corrent count items', function() {
    const wrapper = shallow(<List items={migrations} />);
    expect(wrapper.find('li').length).toEqual(2);
  });
  it('should render correct file name', function() {
    const wrapper = shallow(<List items={migrations} />);
    expect(wrapper.contains('xxx1.csv')).toBe(true);
    expect(wrapper.contains('xxx2.csv')).toBe(true);
  });
  
});