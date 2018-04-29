import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getState } from './reducer';
import Audits from '../audits';
import Report from '../report';
import './style.css';

const ContentViewer = ({ active, parameters = {}, switchView }) => {

	const showView = (active) => {
		switch (active) {
			case 'audit-report':
				return <Report
					switchView={switchView}
					{...parameters}
				/>;
			default:
				return <Audits
					switchView={switchView}
					{...parameters}
				/>;
		}
	};

	return (
		<div className='content'>
			{showView(active)}
		</div>
	);
};

export default connect(getState, actions)(ContentViewer);
