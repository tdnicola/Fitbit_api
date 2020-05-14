import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import SignIn from '../components/SignIn';

import App from '../App';

test('login page displays login with fitbit', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Login with Fitbit/i);
	expect(linkElement).toBeInTheDocument();
});

describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test('Check App page to see if it renders', () => {
		expect(AppWrapper.find('.App').length).toEqual(1);
	});

	// test('Login information is showing', () => {
	// 	expect(AppWrapper.find(<SignIn />)).toHaveLength(1);
	// });
});
