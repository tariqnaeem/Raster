import React from 'react';
import { connect } from 'react-redux';
import { getState } from './reducer';
import * as actions from './actions';
import Form from '../../components/form';
import Input from '../../components/input';
import './style.css';

const AuditsSearch = ({ query = {}, updateForm, filterReports }) => (
	<Form onSubmit={() => filterReports(query)} className='audit-search'>
		<Input
			type='search'
			name='file_partial'
			placeholder='Search for uploaded File Name...'
			value={query.file_partial}
			className='search-input'
			onChange={updateForm} />

		<label className='search-label'><Input name='userOnly' type='checkbox' checked={query.userOnly} onChange={updateForm} /> Only Mine</label>

		<button className='btn btn-primary' type='submit'>Filter</button>
	</Form>
);

export default connect(getState, actions)(AuditsSearch);
