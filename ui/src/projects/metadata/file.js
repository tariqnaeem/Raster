import React , { Component } from 'react';
import FileIcon from '@material-ui/icons/FileDownload';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


class File extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        const files = this.props.data;
        
        return(   files.map(fileObj => {
            let arrFilePath = fileObj.itemPath.split('/');
            return (
                <Tooltip
                  key={"tooltip-controlled"+fileObj.itemPath}
                  placement="right-end"
                  title={fileObj.itemPath}>
                    <ListItem key={fileObj.itemPath}>
                        <ListItemIcon>
                        <Checkbox   onChange={(event) => this.handleToggle(event, obj.itemPath)}
                                    checked={this.state.checked.indexOf(obj.itemPath) !== -1}/>
                        <FileIcon />
                        </ListItemIcon>
                        <ListItemText primary={arrFilePath[arrFilePath.length-1]} />
                    </ListItem>
                   
                </Tooltip>
            )
        }))
        
    }
}
export default File;