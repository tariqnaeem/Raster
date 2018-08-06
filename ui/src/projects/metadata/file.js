import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import FileIcon from '@material-ui/icons/FileDownload';



var File  = props => {
    
    const { item , fileChecked, handleFileToggle} = props;
    
    return <div className="MetaDataFiles">
                <List component="nav">
                    <Tooltip    key={"tooltip-controlled"+item.itemPath}
                                placement="right-end"
                                title={item.itemPath}>
                        <ListItem key={item.itemPath}>
                            <Checkbox   onChange={(event) => handleFileToggle(item.itemPath)} 
                                        checked={fileChecked.indexOf(item.itemPath) !== -1}/>
                            <FileIcon />
                            <ListItemText primary={item.itemName} />
                        </ListItem>
                    </Tooltip>
                </List>
            </div>
}   

File.propTypes = {
    file: PropTypes.object.isRequired,
    fileChecked: PropTypes.array.isRequired,
    handleFileToggle: PropTypes.func.isRequired
};

export default File;
