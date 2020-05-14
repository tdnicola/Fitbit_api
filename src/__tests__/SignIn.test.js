import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import SignIn from '../components/SignIn';

describe('<SignIn /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<SignIn />);
	});

	test('Login information is showing', () => {
		expect(AppWrapper.length).toEqual(1);
	});
});
