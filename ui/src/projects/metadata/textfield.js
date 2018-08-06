import React , { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


var TF = props => {

    var {name, mandatory, change, value}  = props;  
                      
    return( <TextField      autoFocus
                            style={{width:500}}
                            key={name}            
                            label={name}
                            value={value}
                            onChange = {(event) => change(name, event.target.value)}
                            type="text" margin="dense"/>)

}

TF.propTypes = {
    value: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    mandatory: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default TF;