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
    this.handleClose= this.handleClose.bind(this);
  }
  
  
  
  

  handleClose(event, reason){
    this.props.close();

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
          open={this.props.status}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={ <span id="message-id">
                        <div>{"Publish Status: "+message.publishStatus}</div>
                        <div>{"Result: "+message.validationResult}</div>
                        {message.datasetReport.length > 0 && message.datasetReport[0].datasetFileReport.length > 0 ? 
                            <div>{"Error(s) : "+message.datasetReport[0].datasetFileReport[0].validationErrors.map(item => (
                                <div key={item}>{item}</div>
                        ))}</div> : ""}
                    </span>}
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
