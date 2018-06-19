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
    const { classes, onClose, response,  ...other } = this.props;
   
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Response</DialogTitle>
        <div>
          <List>
            {response.emailedTo.map((email, index) => (
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
        openResponse: false,
        response: null
      };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
    

  handleClickOpen () {
    this.setState({openResponse : true, response:this.props});
  }

  handleClose () {
    this.setState({openResponse : false});
  }

  render() {
    
    if(this.state.response != this.props){
        
        this.handleClickOpen();
    }
    
    return (
      <div>  
        <SimpleDialogWrapped
          open={this.state.openResponse}
          onClose={this.handleClose}
          response={this.props}
        />
      </div>
    );
  }
}

export default connect(getState, actions)(SimpleDialogDemo);
