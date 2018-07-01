import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Directory from '../metadata/directory';
import TextField from '@material-ui/core/TextField';
import FolderIcon from '@material-ui/icons/Note';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MetaDataDialog extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        ANZACId: "",
        datasetName: "",
        datasetOwnerId: "",
        folderName: "",
        projectName: "",
        open: false
      };
      this.handleClose = this.handleClose.bind(this);
      this.editMetaData = this.editMetaData.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);
  }
   

  handleClickOpen(event, folder){
    this.setState({ open: true, folderName:folder});
    this.props.requestProjectMetaData(this.props.projectName, folder);
  }
  handleClose(){
    this.setState({ open: false });
  }

  editMetaData(event){
    var arrObjs = [{"name" : "datasetName", "value": this.state.datasetName, 
                    "recursive": true, "overwriteChildren": true }, 
                    {"name" : "ANZLicId", "value": this.state.ANZACId, 
                    "recursive": true, "overwriteChildren": true},
                    {"name" : "datasetOwnerId", "value": this.state.datasetOwnerId, 
                    "recursive": true, "overwriteChildren": true}];
    
    
    this.props.requestProjectEditMetaData(this.state.projectName, this.state.folderName, arrObjs);

  }

  render() {
 
    if(this.state.folderName != this.props.folderName ){
        this.setState({ folderName: this.props.folderName, projectName: this.props.projectName})
    }

    return (
    <div>
        <IconButton aria-label={this.props.folderName} onClick={event => this.handleClickOpen(event, this.props.folderName)}>
            <FolderIcon />
        </IconButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>

          <DialogTitle id="form-dialog-title">{"Folder : " + this.props.folderName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {"Project : "+this.props.projectName}
            </DialogContentText>
            <List>
            
                {
                  this.props.IsReadyMetaData  ?  this.props.metaData.metadata.map(item => {
              
                    return(
                      <ListItem key={item.name}><TextField
                      autoFocus
                      margin="dense"
                      key={item.name}
                      value={this.state[item.name] ? this.state[item.name] : item.value}
                      label={item.name}
                      onChange = {(event) => this.setState({ [item.name]: event.target.value })}
                      type="text"
                      fullWidth/></ListItem>
                    )
                  }) : <CircularProgress style={{ color: purple[500] }} thickness={4} /> } 
                {this.props.metaData  ? <ListItem>
                  <Directory projectName={this.props.projectName} listFolder={this.props.folderName} />
                  </ListItem> : ''} </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={(event) => this.editMetaData(event)} color="primary">
                    Save
                    </Button>
                </DialogActions>
            
        </Dialog>
      </div>
    );
  }
}



export default connect(getState, actions)(MetaDataDialog);
