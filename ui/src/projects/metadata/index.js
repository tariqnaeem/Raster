import React from 'react';
import Button from '@material-ui/core/Button';



import FolderIcon from '@material-ui/icons/Note';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';

import DialogMetaData from '../metadata/dialog';

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DialogOpen: false,
      folderName: "",
      projectName: this.props.projectName
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    
    this.processFolders = this.processFolders.bind(this);
    
  }
  handleClickOpen(event, folder){
    
    this.setState({ DialogOpen: true, folderName:folder});
    
    this.props.requestProjectMetaData(this.props.projectName, folder);
    
    
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
  console.log(this.state.DialogOpen);
    const folders = this.props.folders;
    const projectName = this.props.projectName;
    return (
      <div>
        {this.processFolders(folders)}
        <DialogMetaData folderName={this.state.folderName} projectName={this.state.projectName} status={this.state.DialogOpen}  />
      </div>
    );
  }
}
export default connect(getState, actions)(FormDialog)