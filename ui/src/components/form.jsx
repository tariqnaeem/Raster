import React from 'react';

/**
 * Handle form submission, snooker
 * event to prevent browser submitting form.
 *
 * @param {Object} e
 * @param {Function} onSubmit
 * @return {Void}
 */
const handleSubmit = (e, onSubmit) => {
	e.preventDefault();

	onSubmit();
};

/**
 * Extend existing form to handle onSubmit event
 *
 * @param {Object} props
 * @return {Component}
 */
const Form = ({ onSubmit, children, ...rest }) => (
	<form onSubmit={(e) => handleSubmit(e, onSubmit)} {...rest}>
		{children}
	</form>
);

export default Form;
