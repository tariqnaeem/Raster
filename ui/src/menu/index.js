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
  constructor() {
    super();
    this.state = {
      view: 'INGEST',
    };
  
}
render() {
  const { classes } = this.props;
  return (
    <div className="align-center">
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({view : 'INGEST'}) }}>
          Ingest New Project
          <FileUpload className={classes.rightIcon} />
        </Button>
        <Button variant="contained" color="default" className={classes.button} onClick={() => { this.setState({view : 'UNPUBLISH'}) }}>
          Manage Unpublished Project
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
        <Button variant="contained" size="small" className={classes.button} onClick={() => { this.setState({view : 'PUBLISH'}) }}>
          <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
          Manage Published Project
        </Button>
      </div>
      <div>
        <Views view={this.state.view} />
      </div>
    </div>
  );
}

}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
