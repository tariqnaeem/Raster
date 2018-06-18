import React from 'react';
import Ingest from '../ingest';
import List from '../list';
import Message from '../message';
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
    
    const { projects, uningestedFolders}  = this.props.requests;
    console.log(this.props);
    return (
      <div>
        {this.props.view == "INGEST" ? 
            <Ingest data={uningestedFolders} requests={this.props.requests} /> : 
            <List data={projects}  view={this.props.view}  requests={this.props.requests} />}
            <Message response={this.props}/>  
      </div>
    );
  }
}


export default Views;
