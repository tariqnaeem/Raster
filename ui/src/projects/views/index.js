import React from 'react';
import Ingest from '../ingest';
import List from '../list';



/*class Views extends React.Component {
  

  componentDidMount(){
    

    switch(this.props.view) {
      case "INGEST":
        this.props.requests.requestUnIngestedProjects("sri",true);
        break;

    }
  }*/


const Views = ({view, requestUnIngestedProjects, requestUnPublishProjects, requestPublishProjects, projects, uningestedFolders}) =>
{
	switch(view) {
     case "INGEST":
        this.props.requestUnIngestedProjects("sri",true);
        break;
      case "UNPUBLISH":
        requestUnPublishProjects("sri",true);
        break;
      case "PUBLISH":
        requestPublishProjects();
        break;
    }
	return (
			<div>
        {this.props.view == "INGEST" ? <Ingest data={uningestedFolders}/> : <List data={projects}  view={this.props.view}/>}  
      </div>
	);
};


  
  

  
    /*const {view} = this.props;
    console.log(this.state)
    console.log(this.props.view);
     switch(view) {
     case "INGEST":
        this.props.requests.requestUnIngestedProjects("sri",true);
        break;
      case "UNPUBLISH":
        this.props.requests.requestUnPublishProjects("sri",true);
        break;
      case "PUBLISH":
        this.props.requests.requestPublishProjects();
        break;
    }
    const { projects, uningestedFolders }  = this.props.requests;
    return (
      <div>
        {this.props.view == "INGEST" ? <Ingest data={uningestedFolders}/> : <List data={projects}  view={this.props.view}/>}  
      </div>
    );
  
} */


export default Views;
