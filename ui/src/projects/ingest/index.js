
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class InputAdornments extends React.Component {
  constructor() {
    super();
    this.state = {
      root: '',
      custodian: '',
      project: ''
    };
  
}
  
  

  handleMouseDownPassword (event) {
    event.preventDefault();
  }

  render() {
    
    const { classes, data } = this.props;
   
    return (
      <div className="top-space">
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="root"
              label="Folder Name"
              className={classes.textField}
              value={this.state.root}
              margin="normal"
            />
            <TextField
              id="custodian"
              label="Data Custodian"
              defaultValue=""
              className={classes.textField}
              value={this.state.custodian}
              margin="normal"
            />
            <TextField
              required
              id="project"
              label="Project Name"
              defaultValue=""
              value={this.state.project}
              className={classes.textField}
              margin="normal"
            />
          </div>
          <div className="align-center-form top-space-form">
            <Button variant="contained" color="primary" className={classes.button}>
              Publish
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
