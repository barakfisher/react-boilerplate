import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should render an the dashboard component', () => {
    const wrapper = shallow(<DashboardPage/>)
    expect(wrapper).toMatchSnapshot();
});