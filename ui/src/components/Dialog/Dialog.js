import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './Dialog.css';

const Dialog = ({ displayAlert, message, accept, dismiss }) => (
  <Modal
    isOpen={displayAlert}
    contentLabel="Dialog"
    overlayClassName="Modal__Dialog--Overlay"
    className="Modal__Dialog"
  >
    <div className="Dialog">
      <div className="Dialog__Message">{ message }</div>
      <div className="Dialog__Confirmation">
        <div className="Dialog__Confirmation--Accept" onClick={() => accept.action()}>{accept.label}</div>
      </div>
    </div>
  </Modal>
)

Dialog.propTypes = {
  message: PropTypes.string,
  accept: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  })
}

export default Dialog;
