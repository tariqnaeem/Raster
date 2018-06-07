import React from 'react';
import Ingest from '../ingest';
import List from '../list';



class Views extends React.Component {
  
  render() {
   
    
    const view  = this.props.view;
    const {requestUnPublishProjects, requestPublishProjects, projects}  = this.props.requests;
  
    switch(view) {
      case "UNPUBLISH":
        requestUnPublishProjects();
        break;
      case "PUBLISH":
      requestPublishProjects();

    }

    return (
      <div>
        {view == "INGEST" ? <Ingest/> : <List data={projects}  view={view}/>}  
      </div>
    );
  }
}


export default Views;
