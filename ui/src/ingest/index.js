
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    };
  
}
  
  

  handleMouseDownPassword (event) {
    event.preventDefault();
  }

  handleClickShowPassword () {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Folder Name"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Data Custodian"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Project Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
       
      </form>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
