import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getState } from './reducer';
import DiscrepancyList from '../components/Discrepancies';

class Report extends React.Component {

	componentDidMount () {
		const { isReady, requestReport, reportGuid } = this.props;

		if (!isReady) {
			requestReport(reportGuid);
		}
	}

	render () {
		const { isReady, switchView, api_result, file_name } = this.props;

		let content = <p>... Loading ...</p>;

		if (isReady) {
			content = <DiscrepancyList discrepancies={api_result}/>;
		}

		return (
			<div>
				<div className='content-contentHeader'>
					<h3>Discrepancy Report - {file_name}</h3>

					<div>
						<button className='btn btn-primary' onClick={() => switchView('audits')}>Close</button>
					</div>
				</div>

				{content}
			</div>
		);
	}

}

export default connect(getState, actions)(Report);
