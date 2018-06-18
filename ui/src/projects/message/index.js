/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
    constructor(props){
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }
  
    handleClose (){
        this.props.onClose();
    }

  
  render() {
    const { classes, onClose,  ...other } = this.props;
   
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map((email, index) => (
              <ListItem key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        open: true
      };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
    

  handleClickOpen () {
    this.state.open = true;
  }

  handleClose () {
    this.state.open = false ;
  }

  render() {
    console.log(this.props);
    
    return (
      <div> {this.props.emailedTo ? 
        <SimpleDialogWrapped
          open={this.state.open}
          onClose={this.handleClose}
        /> :''}
      </div>
    );
  }
}

export default connect(getState, actions)(SimpleDialogDemo);
