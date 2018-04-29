import React from 'react';
import Select from './select';

const Limit = ({ options = [], limit, setLimit }) => (
	<div data-automation='Results Per Page'>
		Results Per Page
		<Select
			options={options}
			value={limit}
			onChange={(name, value) => setLimit(value)}
		/>
	</div>
);

export default Limit;
