import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './Modal.css';

const Modal = ({ isOpen, closeModal, children, header }) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel="Create Assignment"
    onRequestClose={() => {
      closeModal()
    }}
    shouldCloseOnOverlayClick={true}
    className="Modal"
    overlayClassName="Modal__Overlay"
    closeTimeoutMS={300}
  >
    <div className="Modal__Content">
      {children}
    </div>
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
  header: PropTypes.string
}

export default Modal;
