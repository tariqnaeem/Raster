import React from 'react';
import Ingest from '../ingest/uningested';
import List from '../list';
import Response from '../response';
import {ADMIN} from '../../constants';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import Processing from '../processing';
import Message from '../dialogs/validation';

class Views extends React.Component {
  
  constructor() {
    super();
    this.state = {
      view: "",
      projects:[]
    };
    
    this.DisplayView = this.RequestProjects.bind(this);
  }
  
  /*componentWillMount(){
    this.RequestProjects(this.props.view);
  }*/

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
    
    const { projects, isReady}  = this.props.requests;
    
    if(this.props.view != this.state.view ){
      this.RequestProjects(this.props.view);
      this.setState({view: this.props.view, projects: this.props.projects});
    }

    if(this.props.projects && this.props.projects != this.state.projects && !(this.props.projects.bucketName)){
      
      this.setState({projects : this.props.projects});
      
      
    }
    
    
    console.log(this.props.projects);
    return (
      <div>
        { isReady  &&  this.props.projects?  <Message message={this.props.projects} /> : ''}
        {
          this.props.view == "INGEST" ?  
            !(isReady) ? <Processing /> : !(this.props.projects.uningestedFolders) ? this.RequestProjects(this.props.view) : <Ingest data={this.props.projects.uningestedFolders} requests={this.props.requests} /> : 
            !(isReady) ? <Processing /> :<List data={this.props.projects.projects}  view={this.props.view}  requests={this.props.requests} />}
            {this.props.projects && this.props.projects.emailedTo ? 
            <Response response={this.props.projects}/> :''}  
      </div>
    );
  }
}


export default connect(getState, actions)(Views);
