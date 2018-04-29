import React from 'react';
import { connect } from 'react-redux';
import { getState } from './reducer';
import * as actions from './actions';
import Component from './component';
import './style.css';

class Audits extends React.Component {

	componentDidMount () {
		const { isReady, requestAudits } = this.props;

		if (!isReady) {
			requestAudits({"year":"2016"});
		}
	}

	render () {
		return <Component {...this.props} />;
	}

}

export default connect(getState, actions)(Audits);
