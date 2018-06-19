import React from 'react';
import Ingest from '../ingest';
import List from '../list';
import Response from '../response';
import {ADMIN} from '../../constants';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';


class Views extends React.Component {
  
  constructor() {
    super();
    this.state = {
      view: "INGEST",
    };
    
    this.DisplayView = this.RequestProjects.bind(this);
  }
  
  
  componentDidMount(){
        this.props.requests.requestUnIngestedProjects(ADMIN,true);
  }

  RequestProjects(view){
     
    switch(view) {
     case "INGEST":
        this.props.requests.requestUnIngestedProjects(ADMIN,true);
        break;
      case "UNPUBLISH":
        this.props.requests.requestUnPublishProjects(ADMIN,true);
        break;
      case "PUBLISH":
        this.props.requests.requestPublishProjects();
        break;
    }
  }

  render() {
    
    if(this.props.view != this.state.view){
      this.setState({view: this.props.view});
      this.RequestProjects(this.props.view);
    }
    
    const { projects, uningestedFolders}  = this.props.requests;
    
    return (
      <div>
        {this.props.view == "INGEST" ? 
            <Ingest data={uningestedFolders} requests={this.props.requests} /> : 
            <List data={projects}  view={this.props.view}  requests={this.props.requests} />}
            {this.props.emailedTo ? 
            <Response response={this.props}/> :''}  
      </div>
    );
  }
}


export default connect(getState, actions)(Views);
