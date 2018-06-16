
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Progress from '../progress';
import React, { Component } from 'react';
import {ADMIN,BUCKET} from '../../constants';





class InputAdornments extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.ingest = this.ingest.bind(this);
    this.state = {};
}
  ingest(event,index){
    
    /*bucketName
      projectName 
      dataCustodian 
      folder */
  
      this.props.request.requestIngestProject(BUCKET, this.state["Project" + index], ADMIN, this.state["Root" + index]);
  }
  create(){
    let unIngestedProjects = []
    var projects = this.props.data;
    
    for (let i = 0; i < projects.length; i++) {
      
      var project = projects[i].split("/");
      
      unIngestedProjects.push(<div>
        <TextField
          id={"Root"+i}
          name={"Root" + i}
          label="Folder Name"
          value={this.state["Root" + i] = project[0]}
          margin="normal"
          key={"Root"+i}
          disabled={true}
        />
        <TextField
          id={"Custodian"+i}
          name={"Custodian" + i}
          label="Data Custodian"
          value={this.state["Custodian" + i] = ADMIN}
          onChange = {(event) => this.setState({ ["Custodian" + i]: event.target.value })}
          margin="normal"
          key={"Custodian"+i}
        />
        <TextField
          required
          id={"Project"+i}
          label="Project Name"
          value={this.state["Project" + i]}
          margin="normal"
          key={"Project"+i}
          onChange = {(event) => this.setState({ ["Project" + i]: event.target.value })}
        />
        <Button variant="contained" color="primary" key={"Bttn"+i} onClick={event => this.ingest(event, i)}>
          Ingest
          <Icon>send</Icon>
        </Button>
      </div>)
    }
    return unIngestedProjects
  }
  
  render() {
    console.log(this.props.request);
    const { data } = this.props;
  
    return (
      <div className="top-space">
      { (data && data.length > 0) ? this.create() : <Progress/>}
      </div>      
    );
  }
}



export default InputAdornments;
