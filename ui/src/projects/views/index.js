import React from 'react';
import Ingest from '../ingest';
import List from '../list';

import {ADMIN} from '../../constants';



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
    console.log(this.props);
    const { projects, uningestedFolders}  = this.props.requests;
    
    return (
      <div>
        {this.props.view == "INGEST" ? <Ingest data={uningestedFolders} request={this.props.requests} /> : <List data={projects}  view={this.props.view}/>}  
      </div>
    );
  }
}


export default Views;
