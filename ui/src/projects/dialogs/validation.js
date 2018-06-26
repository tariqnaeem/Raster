/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import CircularProgress from "@material-ui/core/CircularProgress";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FolderIcon from '@material-ui/icons/Note';
import FailedIcon from '@material-ui/icons/Cancel';

import Divider from '@material-ui/core/Divider';
import purple from "@material-ui/core/colors/purple";



const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2
    }
  });

class SimpleDialog extends React.Component {
    constructor(props){
        super(props);
    this.handleClose = this.handleClose.bind(this);
    }

    handleClose (){
        this.props.onClose(this.props.selectedValue);
    }
  
  render() {
    const { classes, onClose, message,  ...other } = this.props;
   
    return (
      <Dialog aria-labelledby="simple-dialog-title"  
      onClose={this.handleClose} {...other}>
        <DialogTitle id="simple-dialog-title"></DialogTitle>
        <div>
          <List>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={message.bucketName} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={message.projectName} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                {message.ingestionStarted ? <ThumbUpIcon /> : <FailedIcon />}
                </ListItemIcon>
                <ListItemText primary="Ingestion Status" />
              </ListItem>
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
    this.setState({openResponse : true, response:this.props.message});
  }

  handleClose () {
    this.setState({openResponse : false});
  }

  render() {
    
    if(this.state.response != this.props.message){
        if(this.props.message.bucketName){
          this.handleClickOpen();
        }
    }
    
    return (
      <div>  
     {this.props.message.bucketName  ? <SimpleDialogWrapped
          open={this.state.openResponse}
          onClose={this.handleClose}
          message={this.props.message}
        /> : ''}
      </div>
    );
  }
}

export default connect(getState, actions)(SimpleDialogDemo);
