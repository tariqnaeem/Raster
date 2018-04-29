import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Button } from '../../components/';
import { HELLO_WORLD } from '../../constants/modalContentTypes';
import { openModal, showAlert, addNotification } from '../../actions';
import './Toolbar.css';

const Toolbar = ({ openModal, showAlert, addNotification }) => {
  return (
    <div className="Toolbar">
      <div>
        <Button onClick={() => openModal(HELLO_WORLD)} icon="build">Modal</Button>
      </div>
      <div>
        <Button onClick={() => showAlert(`Im an alert. You can wire up 'Yes' to an action elsewhere.`)} icon="fingerprint">Alert</Button>
      </div>
      <div>
        <Button onClick={() => addNotification(`Im a notification`)} icon="face">Notification</Button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
