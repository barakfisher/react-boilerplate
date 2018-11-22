import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should render an the expense NotFoundPage component', () => {
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot();
});