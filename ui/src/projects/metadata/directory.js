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
import  '../metadata/style.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import { BUCKET } from '../../constants';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
import Tooltip from '@material-ui/core/Tooltip';
import FileIcon from '@material-ui/icons/FileDownload';
class Directory extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
      open: false,
      openFolder : "",
      directory: [],
      projectName : this.props.projectName,
      listFolder: this.props.listFolder.replace(BUCKET+'/',''),
    };

    this.processDirectory = this.processDirectory.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFileToggle = this.handleFileToggle.bind(this);
 
  }
  processDirectory(event){
   this.props.requestProjectMetaDataDirectory(this.state.projectName, this.state.listFolder);
   this.setState({ open: !(this.state.open) });
   
  }
  openPanel(event, panel){
    console.log(this.state.openFolder);
    
    if(this.state.openFolder == panel){
        this.setState({ openFolder: "" });
    } else {
        this.setState({ openFolder: panel });
    }
  }
 
  
  handleClose(){
    this.setState({ open: !(this.state.open) ,directory :[] });
    
  }

  handleToggle(event, value) {
    this.props.handleToggle(value);
  }

  handleFileToggle(event, value){
   this.props.handleFileToggle(value);
}

  

  render() {
    

    const directory = this.props.directory ? this.props.directory.results : null;

    directory  && this.state.directory != directory.results ?  this.setState({directory: directory.results}) : '' ;

    
    return (
   
       <div className="MetaDataDirectory">
        <ExpansionPanel expanded={this.state.open} onChange={(event) => this.processDirectory(event)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Metadata File(s)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <List>
                {   this.props.directory && this.props.directory.results && this.props.directory.results.childItems ? 
                    this.props.directory.results.childItems.map(obj => {
                        let arrFolderPath =  obj.itemPath.split('/');
                        return( <div key={"div"+arrFolderPath[arrFolderPath.length-1]}>
                                        <ExpansionPanel expanded={this.state.openFolder == "folder"+arrFolderPath[arrFolderPath.length-1]} 
                                                        key={"div"+arrFolderPath[arrFolderPath.length-1]}>
                                            <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
                                                <Typography>
                                                    <Checkbox   onChange={(event) => this.handleToggle(event, obj.itemPath)} checked={this.props.folderChecked.indexOf(obj.itemPath) !== -1}/>
                                                    <div className="Directory" onClick={(event) => this.openPanel(event, "folder"+arrFolderPath[arrFolderPath.length-1])}>
                                                        <FolderIcon />{arrFolderPath[arrFolderPath.length-1]}
                                                    </div>
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            {this.state.openFolder == "folder"+arrFolderPath[arrFolderPath.length-1] ?
                                                    <div className="MetaDataFiles">
                                                        <List component="nav">
                                                            {obj.childItems && obj.childItems.map(fileObj => {
                                                                let arrFilePath = fileObj.itemPath.split('/');
                                                               
                                                                    return(
                                                                    <Tooltip        key={"tooltip-controlled"+fileObj.itemPath}
                                                                                    placement="right-end"
                                                                                    title={fileObj.itemPath}>
                                                                        <ListItem key={fileObj.itemPath}>
                                                                           
                                                                                <Checkbox   onChange={(event) => this.handleFileToggle(event, fileObj.itemPath)}
                                                                                            checked={this.props.fileChecked.indexOf(fileObj.itemPath) !== -1}/>
                                                                                <FileIcon />
                                                                            
                                                                            <ListItemText primary={arrFilePath[arrFilePath.length-1]} />
                                                                        </ListItem>
                                                                    </Tooltip>)
                                                               
                                                            })
                                                        }
                                                            
                                                        </List>
                                                    </div> : ''}            
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>)
                 
               
                        }) : <CircularProgress style={{ color: purple[500] }} thickness={4} /> }
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
            
        
   

     
    </div>)
     
    }
}
export default connect(getState, actions)(Directory)