import React from 'react';
import Icon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

const AuditTableRow = ({
	inProgress,
	uploadedCount,
	guid,
	file_name,
	avcs,
	missing_count,
	discrepancy_count,
	date,
	showReport,
	first_name,
	last_name,
	unique_avc_count,
	rerunAudit,
}) => (inProgress
	?
	<tr>
		<td>{file_name}</td>
		<td colSpan={4}>{`${uploadedCount} AVCs Uploaded (Processing)`}</td>
	</tr>
	:
	<tr>
		<td>{file_name}</td>
		<td>{unique_avc_count}</td>
		<td>{missing_count}</td>
		<td>{discrepancy_count}</td>
		<td>Audit Result: {date}</td>
		<td><Icon icon={faUser} /> {first_name} {last_name}</td>
		<td className='actions'>
			<button className='btn btn-primary' onClick={() => showReport(guid, file_name)}>Show</button>
			<button className='btn btn-primary' onClick={() => rerunAudit(file_name, avcs)}>Rerun Audit</button>
		</td>
	</tr>
);

export default AuditTableRow;
