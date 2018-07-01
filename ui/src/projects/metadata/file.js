import React , { Component } from 'react';
import FileIcon from '@material-ui/icons/FileDownload';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



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
                            <FileIcon />
                        </ListItemIcon>
                        <ListItemText primary={arrFilePath[arrFilePath.length-1]} />
                    </ListItem>
                    <ListItem>
                    <ListItemText htmlFor="demo-controlled-open-select">Age</ListItemText>
                        <Select
                            
                            inputProps={{
                            name: 'age',
                            id: 'demo-controlled-open-select',
                            }}>
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </ListItem>
                </Tooltip>
            )
        }))
        
    }
}
export default File;