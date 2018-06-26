import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FolderIcon from '@material-ui/icons/Note';
import AccordionCloseIcon from '@material-ui/icons/ExpandLess';
import AccordionOpenIcon from '@material-ui/icons/ExpandMore'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Divider } from '@material-ui/core';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import Directory from '../metadata/directory'
class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DialogOpen: false,
      ANZACId: "",
      DatasetName: "",
      datasetOwnerId: "",
      folderName: ""
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.processFolders = this.processFolders.bind(this);
    this.editMetaData = this.editMetaData.bind(this);
  }
  handleClickOpen(event, folder){
    this.setState({ DialogOpen: true, folderName:folder  });
  }
 
  editMetaData(event){
    var arrObjs = [{"name" : "datasetName", "value": this.state.DatasetName, 
                    "recursive": true, "overwriteChildren": true }, 
                    {"name" : "ANZLicId", "value": this.state.ANZACId, 
                    "recursive": true, "overwriteChildren": true},
                    {"name" : "datasetOwnerId", "value": this.state.datasetOwnerId, 
                    "recursive": true, "overwriteChildren": true}];
    
    
    this.props.requestProjectEditMetaData(this.props.projectName, this.state.folderName, arrObjs);

      
  }
  handleClose(){
    this.setState({ DialogOpen: false });
  }

  processFolders(folders){
    let arrFolders = [];
    for(let i =0; i< folders.length;i++){
        arrFolders.push(
          <div key={"UnIngestedFolder"+i}>
             
              <Tooltip
                  enterDelay={500}
                  id={"tooltip-controlled"+i}
                  leaveDelay={100}
                  open={this.state.open}
                  placement="bottom"
                  title={folders[i]}>
                <IconButton aria-label={folders[i]} onClick={event => this.handleClickOpen(event, folders[i])}>
                  <FolderIcon />
                </IconButton>
              </Tooltip>
          </div>
        )
    }
    return arrFolders;
  }

  render() {
   
    const folders = this.props.folders;
    const projectName = this.props.projectName;
    return (
      <div>
        {this.processFolders(folders)}
        <Dialog
          open={this.state.DialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{"Folder : "+this.state.folderName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {"Project: " + projectName}  
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="ANZACId"
              label="ANZLIC ID"
              onChange = {(event) => this.setState({ "ANZACId": event.target.value })}
              type="text"
              fullWidth/>
           
            <TextField
              autoFocus
              margin="dense"
              id="DatasetName"
              label="Dataset Name"
              onChange = {(event) => this.setState({ "DatasetName": event.target.value })}
              type="text"
              fullWidth
            />
           
            <TextField
              autoFocus
              margin="dense"
              id="datasetOwnerId"
              label="Data Owner ID"
              onChange = {(event) => this.setState({ "datasetOwnerId": event.target.value })}
              type="text"
              fullWidth
            />
             <IconButton><Directory projectName={this.props.projectName} listFolder={this.state.folderName} /></IconButton>
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
export default connect(getState, actions)(FormDialog)