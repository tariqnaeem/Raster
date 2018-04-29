import React from 'react';
import { connect } from 'react-redux';
import includes from 'lodash/includes';
import keys from 'lodash/keys';
import { Modal, Card } from '../../components';
import { getModal } from '../../selectors';
import { closeModal } from '../../actions';
import * as modalContentTypes from '../../constants/modalContentTypes';
import { HELLO_WORLD } from '../../constants/modalContentTypes';

const modalContentExists = (modalContent) => {
  return includes(keys(modalContentTypes), modalContent)
}

const getHeaderLabel = (type) => {
  switch (type) {
    case HELLO_WORLD:
      return 'Hello world'
    default:
      return null
  }
}

const ModalContainer = ({ modalContentType, isOpen, closeModal }) => {
  if (!modalContentType) return null;

  if (modalContentExists(modalContentType)) {
    return (
      <Modal isOpen={isOpen} closeModal={closeModal} header={getHeaderLabel(modalContentType)}>
        <Card header="Im A Card">
          Hellow World!
        </Card>
      </Modal>
    )
  } else {
    console.warn(`You're trying to open a modalContentType that doesn't exist`);
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    modalContentType: getModal(state).modalContentType,
    isOpen: getModal(state).isOpen
  }
}

const mapDispatchToProps = {
  closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
