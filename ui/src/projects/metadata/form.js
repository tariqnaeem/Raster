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
import Tooltip from '@material-ui/core/Tooltip';

class MetaDataForm extends React.Component {
    constructor(props){
      super(props);
      
      this.state = {
          ANZACId: "",
          datasetName: "",
          organizationId: "",
          datasetOwnerId: "",
          publishCategory: "",
          securityClassificationId: "",
          informationAssetRegisterClassificationId : "",
          lisenceId: "",
          copyrightId : "",
          disclaimerId: "",
          webServiceFlag: "",
          downloadFlag: "",
      };
        
      this.handleClose = this.handleClose.bind(this);
      this.editMetaData = this.editMetaData.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
      this.handleFileToggle = this.handleFileToggle.bind(this);
        
    }

    render() {
    
        return (
            <div>
                <TextField autoFocus
                style={{width:450}}
                key="ANZACId"
                value={this.state.ANZACId}
                label="ANZLIC ID"
                onChange = {(event) => this.setState({ ANZACId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:450}}
                key="datasetName"
                value={this.state.datasetName}
                label="Dataset Name"
                onChange = {(event) => this.setState({ datasetName: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:450}}
                key="datasetName"
                value={this.state.organizationId}
                label="Organization Owner"
                onChange = {(event) => this.setState({ organizationId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:450}}
                key="dataOwnerName"
                value={this.state.datasetOwnerId}
                label="Data Owner Name"
                onChange = {(event) => this.setState({ datasetOwnerId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="publishCategory"
                value={this.state.publishCategory}
                label="Publish only to DELWP (Internal) or Beyond (External)"
                onChange = {(event) => this.setState({ publishCategory: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:450}}
                key="securityClassificationId"
                value={this.state.securityClassificationId}
                label="Information Security Classification"
                onChange = {(event) => this.setState({ securityClassificationId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="informationAssetRegisterClassificationId"
                value={this.state.informationAssetRegisterClassificationId}
                label="Information Asset Register Classification"
                onChange = {(event) => this.setState({ informationAssetRegisterClassificationId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="lisenceId"
                value={this.state.lisenceId}
                label="Driving Licence Type"
                onChange = {(event) => this.setState({ lisenceId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="copyrightId"
                value={this.state.copyrightId}
                label="Copyright Attribution"
                onChange = {(event) => this.setState({ copyrightId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="copyrightId"
                value={this.state.disclaimerId}
                label="User DELWP default disclaimer?"
                onChange = {(event) => this.setState({ disclaimerId: event.target.value })}
                type="text" margin="dense"/>

                <TextField autoFocus
                style={{width:500}}
                key="copyrightId"
                value={this.state.disclaimerId}
                label="User DELWP default disclaimer?"
                onChange = {(event) => this.setState({ disclaimerId: event.target.value })}
                type="text" margin="dense"/>

                <FormControl>
                    <InputLabel htmlFor="select-multiple">Does dataset contain content accessible as a webservice?</InputLabel>
                    <Select value={this.state.spatial ? this.state.spatial : ""} onChange={event => this.setState({spatial: event.target.value})} style={{width:200}}>
                                {   SPATIAL.map(item => (
                                        <MenuItem key={item} value={item}> {item} </MenuItem>
                                    ))
                                }
                    </Select>
                </FormControl>


            </div>

        );


    }
}


