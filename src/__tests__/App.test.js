import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('handles validation', () => {
	expect(formIsValid).toBe(false);
	instance.handleValidation();
	expect(formIsValid)toBe(true);
	expect(tree.toJSON()).toMatchSnapshot()

})