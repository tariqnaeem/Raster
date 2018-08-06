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
import {EPSG_CODES, SPATIAL, DISCLAIMER_ID, 
        SECURITY_CLASSIFICATION_ID, LICENCE_TYPE, 
        INFORMATION_ASSET, BOOL, META_DATA_FORM} from '../../constants';
import Tooltip from '@material-ui/core/Tooltip';

import DDL from '../metadata/dropdown';
import TF from '../metadata/textfield';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MetaDataDialog extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        datasetId: "",
        datasetName: "",
        datasetOwnerId: "",
        organizationId : "",
        publishCategory : "",
        folderName: "",
        projectName: "",
        open: false,
        folderChecked: [],
        fileChecked: [],
        EPSGCode : "",
        informationAssetRegisterClassificationId : "",
        securityClassificationId : "",
        webServiceFlag :"",
        disclaimerId:"",
        licenceId:"",
        downloadFlag:"",
        spatial :"",
        metaDataAccordionIsOpen  : false
    };
      
        this.handleClose = this.handleClose.bind(this);
        this.editMetaData = this.editMetaData.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleFileToggle = this.handleFileToggle.bind(this);
        this.change = this.change.bind(this);
        this.directoryIsOpen = this.directoryIsOpen.bind(this);
        this.getDDLItems = this.getDDLItems.bind(this);
        this.IsDDL = this.IsDDL.bind(this);
    }
    directoryIsOpen(){
      this.setState({metaDataAccordionIsOpen : !(this.state.metaDataAccordionIsOpen)});
    }
    
  change(name, value){ 
    
    this.setState({[name]: value});
    console.log(this.state[name] +'  '+value)
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
    let arrFields = [   "datasetId",
                        "datasetName",
                        "datasetOwnerId",
                        "organizationId",
                        "publishCategory",
                        "informationAssetRegisterClassificationId",
                            "securityClassificationId",
                            "webServiceFlag",
                            "disclaimerId",
                            "licenceId",
                            "downloadFlag"];
    

    if( this.state.datasetId == "" || this.state.datasetName || this.state.organizationId == "" || 
        this.state.datasetOwnerId == "" || this.state.publishCategory == "" ) {
            alert(' * fields are mandatory');
        }

    recursive = this.state.folderChecked.length > 0 ? true : false; 
        
    
    if(this.props.metaData.metadata.length > 0){
        this.props.metaData.metadata.map(item => {
            let parameterObj = {};
                parameterObj.name  =  item.name;
                parameterObj.value =  this.state[item.name] ? this.state[item.name] : item.value ;
                parameterObj.recursive = recursive;
                parameterObj.overwriteChildren = true;

            arrObjs.push(parameterObj);
        });
    } else {
        arrFields.map(item => {
            let parameterObj = {};
                parameterObj.name  =  item;
                parameterObj.value =  this.state[item];
                parameterObj.recursive = recursive;
                parameterObj.overwriteChildren = true;

            arrObjs.push(parameterObj);
        });
    }

    /**
     * Looping via selected folders
    **/
    if(this.state.folderChecked.length > 0){
      
      this.state.folderChecked.map(folder => {  
        this.props.requestProjectEditMetaData(this.state.projectName, folder, arrObjs);
      });
    } 
    else if(this.state.fileChecked.length > 0) {

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
      
    } else {
        this.props.requestProjectEditMetaData(this.state.projectName, this.props.folderName, arrObjs);
    }
    
  }

    handleToggle(value) {
        const { folderChecked } = this.state;
        const currentIndex = folderChecked.indexOf(value);
        const newChecked = [...folderChecked];
        
        if (currentIndex === -1) {
                newChecked.push(value);
                this.setState({ downloadFlag : null, webServiceFlag : "", 
                                disclaimerId:null, securityClassificationId:null, licenceId:null, informationAssetRegisterClassificationId:null})
                this.props.requestProjectMetaData(this.props.projectName, value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        this.setState({folderChecked: newChecked});
    }

    

    handleFileToggle(value){
        console.log(value);
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

    getDDLItems(item){
        return  item == "disclaimerId" ? DISCLAIMER_ID : 
                item == "securityClassificationId" ? SECURITY_CLASSIFICATION_ID :
                item == "licenceId" ? LICENCE_TYPE :
                item == "informationAssetRegisterClassificationId" ? INFORMATION_ASSET : BOOL
    }

    IsDDL(item){
        if( item == "downloadFlag"  || item =="webServiceFlag" || item == "disclaimerId"  || 
            item == "securityClassificationId" || item == "licenceId" || item == "informationAssetRegisterClassificationId") 
            return true;
        else
            return false;
    }

    render() {
        
        let arrFolderPath = this.props.folderName.split('/');
        if(this.state.folderName != this.props.folderName ){
            this.setState({ folderName: this.props.folderName, projectName: this.props.projectName})
        }
        
        return (
        <div>
            <IconButton aria-label={this.props.folderName} onClick={event => this.handleClickOpen(event, this.props.folderName)}>
                <FolderIcon />
            </IconButton>
            {arrFolderPath[arrFolderPath.length-1]}
            <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
                <DialogTitle id="form-dialog-title">{"Folder : " + this.props.folderName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"Project : " + this.props.projectName}
                    </DialogContentText>
                        {
                            this.props.IsReadyMetaData  ?  this.props.metaData.metadata.map(item => {
                             
                            //this.arrFields.map(item => {
                            
                        return(

                                this.IsDDL(item.name) ? 
                                <div>
                                    <DDL name={item.name} items={this.getDDLItems(item.name)} change={this.change} value={this.state[item.name] ? this.state[item.name] : item.value  } />
                                </div>  :
                                <TF name={item.name} change={this.change} mandatory={true} value={this.state[item.name] ? this.state[item.name] : item.value}/>
                                
                            )}): <CircularProgress style={{ color: purple[500] }} thickness={4} />
                        }

                    {
                        this.props.IsReadyMetaData && this.props.metaData.metadata.length == 0 ?
                        
                <div>
                    <TF name="datasetId" change={this.change} mandatory={true} value={this.state.datasetId ? this.state.datasetId : ''}/>
                    <TF name="datasetName" change={this.change} mandatory={true} value={this.state.datasetName ? this.state.datasetName : ''} />
                    <TF name="datasetOwnerId" change={this.change} mandatory={true} value={this.state.datasetOwnerId ? this.state.datasetOwnerId : ''} />
                    <TF name="organizationId" change={this.change} mandatory={true} value={this.state.organizationId ? this.state.organizationId : ''} />
                    <TF name="publishCategory" change={this.change} mandatory={true} value={this.state.publishCategory ? this.state.publishCategory : ''} />
                    <DDL name="securityClassificationId"  items={SECURITY_CLASSIFICATION_ID} change={this.change} value={''} />
                    <DDL name="informationAssetRegisterClassificationId" items={INFORMATION_ASSET} change={this.change} value={''} />
                    <DDL name="licenceId" items={LICENCE_TYPE} change={this.change} value={''} />
                    <DDL name="disclaimerId" items={DISCLAIMER_ID} change={this.change} value={''} />
                    <DDL name="webServiceFlag" items={BOOL} change={this.change} value={''} />
                    <DDL name="downloadFlag" items={BOOL} change={this.change} value={''} />
                </div> : ''}

                    {this.state.fileChecked.length > 0 && this.props.IsReadyMetaData ? 
                        <div>    
                            <FormControl>
                                <DDL name="CPSGCode" items={EPSG_CODES} change={this.change} value={this.state.CPSGCode ? this.state.CPSGCode : "" } />
                            </FormControl>
                            <FormControl>        
                                <DDL name="Spatial" items={SPATIAL} change={this.change} value={this.state.spatial ? this.state.spatial : ""} />
                            </FormControl>
                        </div> : ''}
                    <List>
                        {this.props.metaData && this.props.IsReadyMetaData  ? 
                        <ListItem>
                            <Directory  projectName={this.props.projectName} 
                                        listFolder={this.props.folderName} 
                                        handleToggle={this.handleToggle} 
                                        handleFileToggle={this.handleFileToggle} 
                                        folderChecked={this.state.folderChecked}
                                        fileChecked={this.state.fileChecked}
                                        isOpen={this.state.metaDataAccordionIsOpen}
                                        directoryIsOpen = {this.directoryIsOpen}/>
                        </ListItem> : ''} 
                    </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={(event) => this.editMetaData(event)} color="primary">Save</Button>
                    </DialogActions>
            </Dialog>
        </div>
        );
  }
}



export default connect(getState, actions)(MetaDataDialog);
