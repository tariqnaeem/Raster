import React from 'react';
import PropTypes from 'prop-types';


const Toogle = ({populateGraph}) =>
{
	const loadGraph = () => {
        
            populateGraph({'year' : document.getElementById('ddlYear').value});
        };
	return (
		<div className='fileUpload'>
			<select id="ddlYear" onChange={loadGraph}>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
			</select>
		</div>
	);
};

Toogle.propTypes = {
	populateGraph: PropTypes.func.isRequired,
};

export default Toogle;













