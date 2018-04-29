import React from 'react';

/**
 * Extended input component.
 *
 * @param {Object} props
 * @return {Component}
 */
const Input = ({ name, disabled = false, checked = false, pattern, type, value = '', onChange, ...rest }) => {

	const updateField = ({ target }) => {
		let inputValue = target.value;

		if (type === 'checkbox') {
			inputValue = target.checked;
		}

		if (type === 'radio') {
			inputValue = value;
		}

		onChange(name, inputValue);
	};

	return (
		<input
			name={name}
			type={type}
			pattern={pattern}
			checked={checked}
			disabled={disabled}
			value={value || ''}
			onChange={updateField}
			{...rest} />
	);
};

export default Input;
