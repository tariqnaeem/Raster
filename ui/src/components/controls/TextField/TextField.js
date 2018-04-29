import React, { Component } from 'react';
import { Control } from 'react-redux-form';
import uniqueId from 'lodash/uniqueId';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.fieldId = uniqueId('textField_');
  }

  render() {
    const { labelText, model, ...rest } = this.props;
    return (
      <div className="TextField">
        <label htmlFor={this.fieldId} className="TextField__Label">{labelText}</label>
        <input id={this.fieldId} type="text" {...rest} className="TextField__Input"/>
      </div>
    )
  }
}

export default props => (
  <Control model={props.model} component={TextField} controlProps={{...props}} ignore={['focus', 'blur']}/>
)
