
import React from 'react';
import PropTypes from 'prop-types';
import { moment } from '../../utils';

const Discrepancy = ({ discrepancy }) => (
<div className="Comment">
    <div className="Comment__Metadata">
        <div className="Comment__Author">{discrepancy.name}</div>
        <div className="Comment__Date">{discrepancy.gender}</div>
    </div>
    <div className="Comment__Body">
        { discrepancy.age }
    </div>
</div>
)



export default Discrepancy;
