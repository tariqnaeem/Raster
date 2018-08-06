import React , { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

var Dropdown = props => {
    
    const {name, items, change, get, value}  = props;
                       
    return(<div><InputLabel htmlFor={"select"+name}>{name}</InputLabel>
        <Select key={name}
                onChange={event => change(name, event.target.value )} 
                style={{width:200}}
                value={value}
                inputProps={{name: name, id: "select"+name}}>
            <MenuItem value=""><em>None</em></MenuItem>
            {items ? items.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>)) : ''}
        </Select>
    </div>)
        
    
}
export default Dropdown;