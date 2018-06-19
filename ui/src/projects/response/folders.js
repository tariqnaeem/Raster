import React from 'react';
import FolderIcon from '@material-ui/icons/Note';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

class MetaDataFiles extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        DialogOpen: false,
      };
    }
  render(){
        const {folders}  = this.props;
    console.log(folders.length);
        return(
            <div>
            <List>
            {folders.map((folder, index) => (
                <ListItem key={"UnIngestedFolder"+folder.filePath}>
                  <IconButton aria-label={folder.filePath}>
                    <FolderIcon />
                  </IconButton>      
                </ListItem>
            ) )}
            </List>
            </div>
            
        );

        


    }
  
}
export default MetaDataFiles;
  