import React from 'react';

class Select extends React.Component {

	componentWillMount () {
		const { name, value, options = [], defaultValue, onChange } = this.props;

		if (!value && (options && options.length > 0) && !defaultValue) {
			onChange(name, options[0].id);
		}
	}

	render () {
		const { name, value = '', options = [], defaultValue = false, optionKey = 'label', onChange } = this.props;

		const updateField = ({ target }) => onChange(name, target.value);

		return (
			<select name={name} value={value || ''} onChange={updateField}>
				{defaultValue && <option value=''></option>}
				{options.map((option) => <option key={option.id} value={option.id}>{option[optionKey]}</option>)}
			</select>
		);
	}

}

export default Select;
