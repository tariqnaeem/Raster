import React from 'react';
import Limit from '../../components/limit';
import Pagination from '../../components/pagination';
import './style.css';

const options = [
	{ id: 20, label: 20 },
	{ id: 50, label: 50 },
	{ id: 100, label: 100 },
];

const AuditsPagination = ({ search = {}, pagination = {}, requestAudits }) => {

	const filterReports = (limit, offset) => {
		const { isSubmitted, query } = search;

		requestAudits(isSubmitted ? query : {}, limit, offset);
	};

	return (
		<div className='pagination'>
			<div className='pagination-limit'>
				<Limit
					options={options}
					limit={pagination.limit}
					setLimit={(limit) => filterReports(limit)}
				/>
			</div>

			<div className='pagination-pages'>
				<Pagination
					{...pagination}
					setOffset={(offset) => filterReports(pagination.limit, offset)}
				/>
			</div>
		</div>
	);
};

export default AuditsPagination;
