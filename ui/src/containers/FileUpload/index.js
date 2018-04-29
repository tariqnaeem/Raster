import React from 'react';
import { connect } from 'react-redux';
import { getDiscrepancies } from '../../actions';
import FileUpload from '../../components/FileUpload';

const AVCFileUpload = ({ getDiscrepancies, showAlert }) =>(
    <FileUpload getDiscrepancies={getDiscrepancies} showAlert={showAlert}/>
);

const mapDispatchToProps = {
    getDiscrepancies: getDiscrepancies.request
}

export default connect(undefined, mapDispatchToProps)(AVCFileUpload);
