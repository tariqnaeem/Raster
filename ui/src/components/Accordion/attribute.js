import React, { Component } from 'react';
import { SYSTEMS } from '../../constants';

class AttributeItem extends Component {
    render() {
        const  attributes = this.props.details;
        const filter = this.props.filter;
        const showAll = this.props.showAll;
        const showAllPathAttributes = this.props.showAllPathAttributes;
       
        
        return (
          
            attributes ? 
            <table className="table">
                <thead>
                    <tr>
                        <th>ATTRIBUTES</th>
                        <th>{SYSTEMS[0]}</th>
                        <th>{SYSTEMS[1]}</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        attributes ? attributes.map((attribute, indexAttribute)  => 
                        
                    (attribute[0].DISCREPANCY_MISMATCH || showAll || showAllPathAttributes) ? 
                        
                            <tr>
                                <td>
                                {
                                    <span className={attribute[0].DISCREPANCY_MISMATCH ? 'discrepancy' : 'attributeValue'}>
                                        {attribute[0].PARAM_NAME}
                                    </span>
                                }
                                </td>
                                {attribute[0].SYSTEM_TYPE == SYSTEMS[0] ?
                                <td>
                                    <span className={attribute[0].DISCREPANCY_MISMATCH ? 'discrepancy' : 'attributeValue'}>
                                        {attribute[0].VALUE}
                                    </span>
                                </td> : <td></td>}
                                {attribute[0].SYSTEM_TYPE == SYSTEMS[1] ?
                                <td>
                                    <span className={attribute[0].DISCREPANCY_MISMATCH ? 'discrepancy' : 'attributeValue'}>
                                        {attribute[0].VALUE}
                                    </span>
                                </td> : ''}
                                    {   attribute[1] ? 
                                        <td>
                                            {   attribute[1]? 
                                                <span className={attribute[1].DISCREPANCY_MISMATCH ? 'discrepancy' : 'attributeValue'}>
                                                    {attribute[1].VALUE}
                                                </span> : ''
                                            }
                                        </td> :''}

                                        {(attribute.length == 1 && attribute[0].SYSTEM_TYPE == SYSTEMS[0])  ? <td></td> : ''}

                            </tr>

                    : '') :''
                     
                    }
                </tbody>
            </table> : ''
        );
    }
}

export default AttributeItem;
