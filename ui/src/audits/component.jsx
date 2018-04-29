import React from 'react';
import ToogleGraph from '../containers/Toogle';
import Search from './search';
import Table from './table';
import Pagination from './pagination';



const Audits = ({ isReady, audits, search, switchView, rerunAudit, pagination, requestAudits}) => {

	let content = <p>... Loading ...</p>;


	

	if (isReady) {
		content = (
			<div>
				<Table
					audits={audits}
					switchView={switchView}
					rerunAudit={rerunAudit}
				/>

				<Pagination
					search={search}
					pagination={pagination}
					requestAudits={requestAudits}
				/>
			</div>
		);
	}

	return (
		<div>
			<div className='filter'>
				
				<ToogleGraph/>
				
			</div>
			<div className='content-contentHeader'>
				<h3>Graph</h3>
			</div>

			{content}
		</div>

	);

};

export default Audits;
