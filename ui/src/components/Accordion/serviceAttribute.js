import React, { Component } from 'react';
import { SERVICE_ATTRIBUTES } from '../../constants';

class ServiceAttributeItem extends Component {
    render() {
        const  attributes = this.props.details;
    
        return (
          
                        attributes ? attributes.map((attribute, indexAttribute)  =>
                        SERVICE_ATTRIBUTES.find(element =>  element == attribute[0].PARAM_NAME) ?
                            <span className="attributeValue">{attribute[0].VALUE}&nbsp;&nbsp;</span> : ''
                        ) :''



        );
    }
}

export default ServiceAttributeItem;
