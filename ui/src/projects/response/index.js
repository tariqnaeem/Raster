import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { getState } from '../reducer';
import FolderIcon from '@material-ui/icons/Note';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  };
  

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  constructor(props){

    super(props);
    this.state = {
        open: false,
        response: null
      };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createMetaDataFolders = this.createMetaDataFolders.bind(this);
  
   
}

  handleClickOpen(){
    this.setState({ open: true, response:this.props });
  }

  handleClose (){
    this.setState({ open: false });
  }

  createEmailToUsers(){
    let arrEmailUsers = [];
    var emailUsers = this.response.emailedTo;
    for(let i = 0; i< emailUsers.length;i++){
        arrEmailUsers.push(
          <ListItem key={emailUsers[i]}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={emailUsers[i]} />
          </ListItem>
      );
    }

      return arrEmailUsers;

  }

  createMetaDataFolders(){
    let arrFolders = [];
    var folders = this.response.fileReport;
    console.log(folders);
    for(let i =0; i< folders.length;i++){
        arrFolders.push(
            <div key={"UnIngestedFolder"+i}>
            <Tooltip
            enterDelay={500}
            id={"tooltip-controlled"+i}
            leaveDelay={100}
            open={this.state.open}
            placement="bottom"
            title={folders[i]}>
              <IconButton aria-label={folders[i]} onClick={this.handleClickOpen}>
                <FolderIcon />
              </IconButton>
              
          </Tooltip>
            
          </div>
          )
    
    }
    return arrFolders;
  }

  render() {
    const { response } = this.props;
   
    if(this.state.response != this.props) {
        
        this.handleClickOpen();
    }
   
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <List>
                    {this.props.emailedTo.map((email, index) => (
                    <ListItem key={email}>
                        <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                {   this.props.fileReport.map((folder, index) => (
                        <ListItem key={"UnIngestedFolder"+folder.filePath}>
                            <Tooltip enterDelay={500}
                                id={"tooltip-controlled"+index}
                                leaveDelay={100}
                                open={true}
                                placement="bottom"
                                title={folder}>
                                
                                <IconButton aria-label={folder.filePath}>
                                    <FolderIcon />
                                </IconButton>  
                            </Tooltip>    
                        </ListItem>
                        ) 
                    )
                }
            </List>
            </div>
            
                  
         
        </Dialog>
      </div>
    );
  }
}

export default connect(getState, actions)(FullScreenDialog);
