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
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {EPSG_CODES, SPATIAL} from '../../constants';


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
        open: false,
        folderChecked: [],
        fileChecked: [],
        CPSGCode : "",
        spatial :""
    };
      
    this.handleClose = this.handleClose.bind(this);
    this.editMetaData = this.editMetaData.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFileToggle = this.handleFileToggle.bind(this);
      
  }
   

  handleClickOpen(event, folder){
    this.setState({ open: true, folderName:folder});
    this.props.requestProjectMetaData(this.props.projectName, folder);
  }
  handleClose(){
    this.setState({ open: false });
  }

  editMetaData(event){
    let recursive = false;    
    let arrObjs = [];

    if(this.state.folderChecked.length > 1){
        recursive = true;
    }

    this.props.metaData.metadata.map(item => {
        let parameterObj = {};
            parameterObj.name  =  item.name;
            parameterObj.value =  this.state[item.name] ? this.state[item.name] : item.value ;
            parameterObj.recursive = recursive;
            parameterObj.overwriteChildren = true;

        arrObjs.push(parameterObj);
    });

    /**
     * Looping via selected folders
    **/
    if(this.state.folderChecked.length > 0){
      
      this.state.folderChecked.map(folder => {  
        this.props.requestProjectEditMetaData(this.state.projectName, folder, arrObjs);
      });
    } else {

      let parameterObj = {};
          parameterObj.name = "CPSGCode";
          parameterObj.value = this.state.CPSGCode;
          parameterObj.recursive = recursive;
          parameterObj.overwriteChildren = true;

          arrObjs.push(parameterObj);

          parameterObj = {};
          parameterObj.name = "spatial";
          parameterObj.value = this.state.spatial;
          parameterObj.recursive = recursive;
          parameterObj.overwriteChildren = true;

          arrObjs.push(parameterObj);

          this.state.fileChecked.map(folder => {  
            this.props.requestProjectEditMetaData(this.state.projectName, folder, arrObjs);
          });
      
    }
    
  }

    handleToggle(value) {
        const { folderChecked } = this.state;
        const currentIndex = folderChecked.indexOf(value);
        const newChecked = [...folderChecked];

        if (currentIndex === -1) {
                newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        this.setState({folderChecked: newChecked});

            console.log(newChecked);
    }

    handleFileToggle(value){
        const { fileChecked } = this.state;
        const currentIndex = fileChecked.indexOf(value);
        const newChecked = [...fileChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        this.setState({fileChecked: newChecked, folderChecked :[]});

        console.log(newChecked);
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
                    {
                        this.props.IsReadyMetaData  ?  this.props.metaData.metadata.map(item => {
                            return(
                            
                                    <TextField
                                        autoFocus
                                        style={{width:450}}
                                        key={item.name}
                                        value={this.state[item.name] ? this.state[item.name] : item.value}
                                        label={item.name}
                                        onChange = {(event) => this.setState({ [item.name]: event.target.value })}
                                        type="text" margin="dense"/>
                                
                            )}): <CircularProgress style={{ color: purple[500] }} thickness={4} />
                        }
                        {
                   
                        this.state.fileChecked.length > 0 ? 
                        <div>    
                            <FormControl>
                                <InputLabel htmlFor="select-multiple">CPSG Code</InputLabel>
                                <Select value={this.state.CPSGCode ? this.state.CPSGCode : "" } onChange={event => this.setState({CPSGCode: event.target.value})} style={{width:200}}>
                                {   EPSG_CODES.map(item => (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="select-multiple">Spatial</InputLabel>
                                <Select value={this.state.spatial ? this.state.spatial : ""} onChange={event => this.setState({spatial: event.target.value})} style={{width:200}}>
                                {   SPATIAL.map(item => (
                                        <MenuItem key={item} value={item}> {item} </MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                        </div> : ''
                    }
                    <List>
                        {this.props.metaData && this.props.IsReadyMetaData  ? 
                        <ListItem>
                            <Directory  projectName={this.props.projectName} 
                                        listFolder={this.props.folderName} 
                                        handleToggle={this.handleToggle} 
                                        handleFileToggle={this.handleFileToggle} 
                                        folderChecked={this.state.folderChecked}
                                        fileChecked={this.state.fileChecked} />
                        </ListItem> : ''} 
                    </List>
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
