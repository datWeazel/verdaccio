/**
 * MaintainerInfo component
 */

import React from 'react';
import { shallow } from 'enzyme';
import MaintainerInfo from '../../../../../src/webui/components/PackageSidebar/modules/Maintainers/MaintainerInfo/index';

console.error = jest.fn();

describe('<PackageSidebar /> : <Maintainers /> <MaintainerInfo />', () => {
  test('should throw error for required props', () => {
    shallow(<MaintainerInfo />);
    expect(console.error).toBeCalled();
  });

  test('should load the component and match with snapshot', () => {
    const props = {
      title: 'test-title',
      name: 'test',
      avatar: 'http://xyz.com/profile.jpg'
    };
    const wrapper = shallow(<MaintainerInfo {...props} />);
    expect(wrapper.find('.maintainer').prop('title')).toEqual('test');
    expect(wrapper.find('img').prop('src')).toEqual(
      'http://xyz.com/profile.jpg'
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
