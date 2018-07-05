import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';
import Views from '../views';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'INGEST',
    };
}

render() {
  
  return (
    <div style="margin-top: 70px;">
      <div className="align-center">
        <Button variant="contained" color="primary"  onClick={() => { this.setState({view : 'INGEST'}) }}>
          Ingest New Project
          <FileUpload />
        </Button>
        <Button variant="contained" color="default"  onClick={() => { this.setState({view : 'UNPUBLISH'}) }}>
          Manage Unpublished Project
          <Icon >send</Icon>
        </Button>
        <Button variant="contained" size="small"  onClick={() => { this.setState({view : 'PUBLISH'}) }}>
          <Save  />
          Manage Published Project
        </Button>
      </div>
      <div>
        <Views view={this.state.view} requests={this.props} />
      </div>
    </div>
  );
}

}

export default connect(getState, actions)(Menu);
