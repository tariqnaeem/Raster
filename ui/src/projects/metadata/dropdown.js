import React , { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            webServiceFlag :""
        };

        this.change = this.change.bind(this);
        this.get = this.get.bind(this);
    }

    change(event, name){
        this.props.change(name, event.target.value);
    }

    get(name){
        return this.props.get(name);
    }
    render() {
        
        const {name, items}  = this.props;                    
        return(   <div><InputLabel htmlFor={"select"+name}>{name}</InputLabel>
        <Select value={this.get(name)}
                key={name}
                onChange={event => this.change(event, name )} 
                style={{width:200}}
                inputProps={{name: name, id: "select"+name}}>
            <MenuItem value=""><em>None</em></MenuItem>
                           {items ? items.map(item => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            )) : ''}
                            </Select></div>)
        
    }
}
export default Dropdown;