import React from 'react';
import ToogleGraph from './Toogle';
import Graph from './Graph';

const Audits = ({ isReady, audits, requestAudits}) => {

	let content = <p>... Loading ...</p>;

	if (isReady) {
		content = (
			<div>
				<Graph audits={audits}/>
			</div>
		);
	}

	return (
		<div>
			<div className='filter'>
				<ToogleGraph requestAudits={requestAudits}/>
			</div>
			<div className='content-contentHeader'>
				<h3>Graph</h3>
			</div>
			{content}
		</div>
	);

};

export default Audits;
