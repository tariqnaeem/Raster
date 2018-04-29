import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Button } from '../../components/';
import { HELLO_WORLD } from '../../constants/modalContentTypes';
import { openModal, showAlert, addNotification } from '../../actions';
//import './DiscrepancyList.css';

const DiscrepancyList = ({ openModal, showAlert, addNotification }) => {
    return (
        <div className="DiscrepancyList">
            These are my descrepancies.
        </div>
    )
};

const mapDispatchToProps = {
    openModal,
    showAlert,
    addNotification
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscrepancyList);

