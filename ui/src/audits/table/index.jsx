import React from 'react';
import Row from './row';
import Icon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import './style.css';

const AuditTable = ({ audits = [], switchView, rerunAudit }) => {
	const showReport = (reportGuid, file_name) => {
		switchView('audit-report', { reportGuid, file_name });
	};

	return (
		<table className='audit-table' data-automation='Audit Table'>
			<thead>
				<tr>
					<th rowSpan={2}>File Name</th>
					<th colSpan={3}>AVC Audit Status</th>
					<th rowSpan={2}>Date</th>
					<th rowSpan={2}>User</th>
					<th rowSpan={2}>Action</th>
				</tr>
				<tr>
					<th><Icon icon={faInfoCircle} color='#009900' /> <abbr title='Total Number of AVCs Uploaded'>Total</abbr></th>
					<th><Icon icon={faExclamationCircle} color='#CC9900' /> <abbr title='AVCs not found in Network or FLS'>Ignored</abbr></th>
					<th><Icon icon={faQuestionCircle} color='#FF0000' /> <abbr title='AVCs with Discrepancies'>Discrepancies</abbr></th>
				</tr>
			</thead>
			<tbody>
				{audits.map((audit) => <Row key={audit.guid} {...audit} showReport={showReport} rerunAudit={rerunAudit} />)}
			</tbody>
		</table>
	);
};

export default AuditTable;
