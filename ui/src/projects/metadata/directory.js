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
import Folder from '../metadata/folder';

class Directory extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
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
    this.isAccordionOpen = this.isAccordionOpen.bind(this);
    this.openAccordion = this.openAccordion.bind(this);
}

openAccordion(id){
    this.state[id] ? this.setState({[id]:!(this.state[id])}) : this.setState({[id]:true}); 
}

isAccordionOpen(id){
    return this.state[id] ? this.state[id] : false;  
}

processDirectory(event){
    this.props.requestProjectMetaDataDirectory(this.state.projectName, this.state.listFolder);
    this.props.directoryIsOpen();
}

openPanel(event, panel){
    if(this.state.openFolder == panel){
        this.setState({ openFolder: "" });
    } else {
        this.setState({ openFolder: panel });
    }
}
 
handleClose(){
    this.setState({ open: !(this.state.open) ,directory :[] });
}

handleToggle(value) {
    this.props.handleToggle(value);
}

handleFileToggle(value){
   this.props.handleFileToggle(value);
}

render() {
        
    const directory = this.props.directory ? this.props.directory.results : null;

    directory  && this.state.directory != directory.results ?  this.setState({directory: directory.results}) : '' ;
    return (
        <ExpansionPanel expanded={this.props.isOpen} onChange={(event) => this.processDirectory(event)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Metadata File(s)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List>
                    {   this.props.directory && this.props.directory.results && this.props.directory.results.childItems ? 
                    
                        <Folder directory = {this.props.directory.results} 
                                isAccordionOpen = {this.isAccordionOpen} 
                                folderChecked = {this.props.folderChecked}
                                openAccordion = {this.openAccordion}
                                handleToggle= {this.handleToggle}
                                handleFileToggle= {this.handleFileToggle}
                                fileChecked={this.props.fileChecked}/>  : 
                        
                        <CircularProgress style={{ color: purple[500] }} thickness={4} /> 
                    }
                </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>)
    }
}
export default connect(getState, actions)(Directory)