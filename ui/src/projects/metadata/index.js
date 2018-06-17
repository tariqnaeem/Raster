import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FolderIcon from '@material-ui/icons/Note';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DialogOpen: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.processFolders = this.processFolders.bind(this);
  }
  handleClickOpen(){
    this.setState({ DialogOpen: true });
  }

  handleClose(){
    this.setState({ DialogOpen: false });
  }

  processFolders(folders){
    let arrFolders = [];
    for(let i =0; i< folders.length;i++){
        arrFolders.push(
          <div key={"UnIngestedFolder"+i}>
          <Tooltip
          enterDelay={500}
          id={"tooltip-controlled"+i}
          leaveDelay={100}
          open={this.state.open}
          placement="bottom"
          title={folders[i]}
          
        >
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
    
    const folders = this.props.folders;
    
    return (
      <div>
        {this.processFolders(folders)}
        <Dialog
          open={this.state.DialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
