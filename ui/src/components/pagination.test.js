import React from 'react';
import { mount } from 'enzyme';
import Pagination from './pagination';

describe('Pagination component', () => {

	it('renders a single button', () => {
		const wrapper = mount(
			<Pagination
				total={50}
				limit={10}
				offset={0}
			/>
		);

		expect(wrapper.find('button').length).toBe(5);
	});

	it('clicking a button will trigger page', () => {
		const setOffset = jest.fn();

		const wrapper = mount(
			<Pagination
				total={50}
				limit={10}
				offset={0}
				setOffset={setOffset}
			/>
		);

		wrapper.find('button')
			.at(1)
			.simulate('click');

		expect(setOffset.mock.calls[0][0]).toBe(10);
	});

});
