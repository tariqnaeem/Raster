import React , { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.change = this.change.bind(this);
    }

    change(event, name){
        this.props.change(name, event.target.value);
    }
    
    render() {
        
        const {name, mandatory}  = this.props;                    
        return( <TextField  autoFocus
                            style={{width:500}}
                            key={name}            
                            
                            label={name}
                            
                            onChange = {(event) => this.change(event, name)}
                            type="text" margin="dense"/>)
        
    }
}
export default Dropdown;