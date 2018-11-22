// We are going to test by the sahallow render because we are not worried about state changes or lifecycle events
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';
import {shallow} from 'enzyme';

test('should render Header', () => {
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe(' Expensify ');
});

test('Should call startLogout on click', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});