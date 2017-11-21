import React from 'react'
import Enzyme,{ shallow,mount,render} from 'enzyme'
import jest from 'jest'
import Hello from './Hello'
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Hello /> Component', () => {



  let hellocomponent;
  beforeEach(() => {
     hellocomponent = shallow(<Hello str='Hello World' />);
  });


  it('renders', () => {
    expect(hellocomponent.is('div')).toBe(true)
  });

  it('check h1 is defined', () => {
    expect(hellocomponent.find('h1').length).toEqual(1);
  });

  it('check h1 has rendered with correct data', () => {
    expect(hellocomponent.find('h1').text()).toEqual('Hello World');
  });

  it('check str is defined', () => {
    let component = mount(<Hello str='Hello World' />);
    expect(component.props().str).toBeDefined();
  });

  it('check str value has changed to "bar" accordingly', () => {
    let component = mount(<Hello str='Hello World' />);
    component.setProps({ str: 'bar' });
    expect(component.find('h1').text()).toEqual('bar');
  });



});
