/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";


const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2
    }
  });

class SimpleDialog extends React.Component {
    constructor(props){
        super(props);
    }
  
  render() {
    const { classes, onClose, response,  ...other } = this.props;
   
    return (
      <Dialog aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title"></DialogTitle>
        <div>
          <List>
              <ListItem>
                <ListItemText primary="Processing ..." />
                <CircularProgress style={{ color: purple[500] }} thickness={7} />
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
