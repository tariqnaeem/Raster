import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FolderIcon from '@material-ui/icons/FolderOpen';
import AccordionCloseIcon from '@material-ui/icons/ExpandLess';
import AccordionOpenIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';



import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import File from '../metadata/file';
import { BUCKET } from '../../constants';
class Directory extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      open: false,
      directory: [],
      projectName : this.props.projectName,
      listFolder: this.props.listFolder.replace(BUCKET+'/','')
    };

    this.processDirectory = this.processDirectory.bind(this);
    this.handleClose = this.handleClose.bind(this);
 
  }
  processDirectory(event){
   this.props.requestProjectMetaDataDirectory(this.state.projectName, this.state.listFolder);
   this.setState({ open: !(this.state.open) });
  }
 
  
  handleClose(){
    this.setState({ open: !(this.state.open) ,directory :[] });
    
  }

  

  render() {
    
    const directory = this.props.directory ? this.props.directory.results : null;

    directory  && this.state.directory != directory.results ?  this.setState({directory: directory.results}) : '' ;

    
    return (
   
        console.log(this.state.open), 
    !(this.state.open) ? <div><div onClick={event => this.processDirectory(event)}><AccordionOpenIcon /></div> 
    
    {this.props.directory && this.props.directory.results && this.props.directory.results.childItems.map(obj => {
        let arrFolderPath =  obj.itemPath.split('/');
        return(<div key={arrFolderPath[arrFolderPath.length-1]}><FolderIcon />{arrFolderPath[arrFolderPath.length-1]}<File data={obj.childItems}/></div>)
                 
               
            })}      
    </div> : <div onClick={this.handleClose}><AccordionCloseIcon /></div>

    )}
}
export default connect(getState, actions)(Directory)