import React from 'react';
import App from '../App';
import Login from '../components/Login';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe('Test submit form', () => {
  it('Tests click event', () => {
	const component = shallow(<Login />);
	expect(component.contains(<div>Forgot my password</div>)).toBe(false);  
  });
});