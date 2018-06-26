import React , { Component } from 'react';
import FileIcon from '@material-ui/icons/FileDownload';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';





class File extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        const files = this.props.data;
        
        return(files.map(fileObj => {
            
            return (
                <ListItem key={fileObj.itemPath}>
                    <ListItemIcon>
                        <FileIcon />
                    </ListItemIcon>
                    <ListItemText primary={fileObj.itemPath} />
                </ListItem>
            )
        }))
        
    }
}
export default File;