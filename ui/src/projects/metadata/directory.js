import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FolderIcon from '@material-ui/icons/FolderOpen';

import AccordionCloseIcon from '@material-ui/icons/ExpandLess';
import AccordionOpenIcon from '@material-ui/icons/ExpandMore'



import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import File from '../metadata/file';

class Directory extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      open: false,
      directory: [],
      projectName : this.props.projectName,
      listFolder: this.props.listFolder
    };

    this.processDirectory = this.processDirectory.bind(this);
 
  }
  processDirectory(event){
   this.props.requestProjectMetaDataDirectory(this.state.projectName, this.state.listFolder);
  }
 
  
  handleClose(){
    this.setState({ open: false });
  }

  

  render() {
    console.log(this.props);
    const directory = this.props.directory;
    directory  && this.state.directory != directory.childItems ?  this.setState({directory: directory.childItems}) : '' ;
    return (
      <div>
        
    {!(this.state.open)? <div onClick={event => this.processDirectory(event)}><AccordionOpenIcon /></div> : <AccordionCloseIcon />}
    
    {this.state.directory && this.state.directory.map(obj => {
                let arrFolderPath =  obj.itemPath.split('/')
                obj.type == 'FILE' ? <File file={obj} /> : <div><FolderIcon />{arrFolderPath[arrFolderPath.length-1]}</div>
                
              })}
    
      </div>
    );
  }
}
export default connect(getState, actions)(Directory)