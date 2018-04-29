import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Filters from './filter';
import './style.css';




class DiscrepancyList extends Component {

    constructor() {
        super();
    }

    render() {
        const {discrepancies} = this.props;
        return (
            <div>
                <div>{discrepancies ? <Filters details={discrepancies.SERVICE}  />: ''}</div>
            </div>
        )
    }
}
export default DiscrepancyList;







