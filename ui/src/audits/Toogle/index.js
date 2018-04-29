import React from 'react';
import PropTypes from 'prop-types';


const ToogleGraph = ({requestAudits}) =>
{
	const loadGraph = () => {
        
		requestAudits({'year' : document.getElementById('ddlYear').value}, 0,0);
        };
	return (
		<div>
			<select id="ddlYear" onChange={loadGraph}>
					<option value="2016">2016</option>
					<option value="2011">2011</option>
			</select>
		</div>
	);
};



export default ToogleGraph;













