import React from 'react';
import Ingest from '../ingest';
import List from '../list';



class Views extends React.Component {
  
  render() {
   
    const {       requestUnPublishProjects, 
                  requestPublishProjects, 
                  requestUnIngestedProjects, projects}  = this.props.requests;
      
    switch(this.props.view) {
      case "INGEST":
        console.log(requestUnIngestedProjects({
          "dataCustodian":"sri",
          "showAll": true,
          "showUningested": true
          }));
          break;
      case "UNPUBLISH":
        requestUnPublishProjects();
        break;
        
      case "PUBLISH":
        requestPublishProjects();
        break;
    }

    return (
      <div>
        {this.props.view == "INGEST" ? <Ingest data={projects}/> : <List data={projects}  view={this.props.view}/>}  
      </div>
    );
  }
}


export default Views;
