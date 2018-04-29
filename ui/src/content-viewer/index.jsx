import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getState } from './reducer';
import Audits from '../audits';
import './style.css';

const ContentViewer = ({ active, parameters = {}}) => {
	return (
		<div className='content'>
			<Audits {...parameters} />;
		</div>
	);
};

export default connect(getState, actions)(ContentViewer);
