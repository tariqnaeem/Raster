import React , { Component } from 'react';
import FileIcon from '@material-ui/icons/FileDownload';





class File extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    
        const file = this.props.file;
        let arrFilePath = file.itemName.split('/');
        return (
            <div><FileIcon />{arrFilePath[arrFilePath.length-1]}</div>
        );
  }
}
export default File