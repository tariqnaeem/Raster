import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class SimpleSnackbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: true
    };

    this.handleClose= this.handleClose.bind(this);

  }
  
  
  componentWillReceiveProps(nextProps) {
    
    if(this.state.open != nextProps.open){
      this.setState({open: true});
    }
    
  
  }
  

  handleClose(event, reason){
    if (reason === "clickaway") {
      return;
    }
    
    this.setState({ open: false });
  }

  render() {
    const { classes , message, status } = this.props;
  
    
    
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
