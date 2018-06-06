import React from 'react';
import Ingest from '../ingest';


class Views extends React.Component {
  
  render() {
    const view  = this.props.view;
 
    return (
      <div>
        {view == "INGEST" ? <Ingest/> : ''}  
      </div>
    );
  }
}


export default Views;
