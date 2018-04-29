import React from 'react';
import { connect } from 'react-redux';
import Dialog from '../../components/Dialog';
import { acceptAlert } from '../../actions';

const AlertDialog = (props) => (
  <Dialog
    message={props.alertMessage}
    accept={{
      label: 'OK',
      action: props.acceptAction
    }}
    {...props}
  />
)

const mapDispatchToProps = {
  acceptAction: acceptAlert
}

const mapStateToProps = (state) => ({
  displayAlert: state.ui.alert.isOpen,
  alertMessage: state.ui.alert.message
})

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);
