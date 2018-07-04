import React from 'react';
import Button from '@material-ui/core/Button';

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
  }
  

  render() {
  
    const folders = this.props.folders;
    const projectName = this.props.projectName;
    return (
      <div>
       
        <div key={"UnIngestedFolder"}>
            <DialogMetaData  projectName={this.props.projectName} folderName={folders[0]}   />
        </div>
        
      </div>
    );
  }
}
export default connect(getState, actions)(FormDialog)