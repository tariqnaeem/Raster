import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import File from '../metadata/file';
import FolderIcon from '@material-ui/icons/FolderOpen';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import FileIcon from '@material-ui/icons/FileDownload';
import { ExpansionPanelSummary, Typography } from '@material-ui/core';


var Folder = props => {
    
    return (createFolder(props, props.directory));
}

var createFolder = (props, items) => {
    
    const { directory, isAccordionOpen, 
            folderChecked, openAccordion, 
            handleToggle, handleFileToggle, fileChecked } = props;
    
    return items.childItems.map(item => {
            
            let arrFolderPath =  item.itemPath.split('/');
            let folderName = arrFolderPath[arrFolderPath.length-1];

            return item.type == 'FOLDER' ?    
                <ExpansionPanel expanded={isAccordionOpen("folder"+folderName)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            <Checkbox   onChange={(event) => handleToggle(item.itemPath)} 
                                        checked={folderChecked.indexOf(item.itemPath) !== -1}/>
                            <div className="Directory" onClick={(event) => openAccordion("folder"+folderName)}>
                                <FolderIcon />{folderName}
                            </div>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>{createFolder(props, item)}</ExpansionPanelDetails>
                </ExpansionPanel> : <File   handleFileToggle={handleFileToggle} 
                                            item={item} 
                                            fileChecked={fileChecked} />       
            })
                    
    }

Folder.propTypes = {
    directory: PropTypes.object.isRequired,
    isAccordionOpen: PropTypes.func.isRequired,
    openAccordion: PropTypes.func.isRequired,
    folderChecked: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default Folder;
