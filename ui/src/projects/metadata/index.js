import React from 'react';
import Button from '@material-ui/core/Button';
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
      folderName: "",
      projectName: this.props.projectName
    };
   
    this.processFolders = this.processFolders.bind(this);
    
  }
  
 
  
  

  processFolders(folders){
    let arrFolders = [];
    for(let i =0; i< folders.length;i++){
        arrFolders.push(
          <div key={"UnIngestedFolder"+i}>
              <Tooltip
                  id={"tooltip-controlled"+i}
                  placement="bottom"
                  title={folders[i]}>
                  <DialogMetaData  projectName={this.props.projectName} folderName={folders[i]}   />
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
        
      </div>
    );
  }
}
export default connect(getState, actions)(FormDialog)