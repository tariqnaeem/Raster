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


import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import File from '../metadata/file';
import { BUCKET } from '../../constants';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
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
   
       <div className="MetaDataDirectory">
        <ExpansionPanel expanded={this.state.open} onChange={(event) => this.processDirectory(event)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Metadata File(s)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                <List>
            {this.props.directory && this.props.directory.results && 
            this.props.directory.results.childItems ? this.props.directory.results.childItems.map(obj => {
                    let arrFolderPath =  obj.itemPath.split('/');
                    return( <div key={"div"+arrFolderPath[arrFolderPath.length-1]}>
                                <ListItem key={arrFolderPath[arrFolderPath.length-1]}>
                                    <ListItemIcon><FolderIcon /></ListItemIcon>
                                    <ListItemText primary={arrFolderPath[arrFolderPath.length-1]} />
                                </ListItem>
                                <div className="MetaDataFiles"><List component="nav"><File data={obj.childItems}/></List></div>
                            </div>)
                 
               
            }) : <CircularProgress style={{ color: purple[500] }} thickness={4} /> }</List>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
            
        
   

     
    </div>)
     
    }
}
export default connect(getState, actions)(Directory)