import React, { Component } from 'react';
import AttributeItem  from './attribute';

class AccordionPathItem extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            discrepancy: false,
            showAll: false,
            filter : '',
            showAllPathAttributes: false //show/hide attributes at the device level
        };
        this.toggle = this.toggle.bind(this);
        this.showAllAttributes = this.showAllAttributes.bind(this);
    } 
    /**
     * Change the state of the accordion
     */
    toggle() {

        this.setState({
            active: !this.state.active,
            discrepancy: true,
            showAll: this.state.showAll,
            showAllPathAttributes: this.state.showAllPathAttributes
        });
    }

    showAllAttributes(){
        
        this.setState({
            showAllPathAttributes: !this.state.showAllPathAttributes,
            showAll: this.state.showAll
        });
    }


    render() {

        const path = this.props.details;
        this.state.showAll = this.props.showAll;
        this.state.filter = this.props.filter;

        var pathNumber = this.props.index;
        var discrepancyFlag = false;
        var parameters = path.PARAMETERS? path.PARAMETERS: null;

        




            if(parameters !=null){
                for(var index = 0; index < path.PARAMETERS.length; index++){
                    for(var indexParam = 0; indexParam <  path.PARAMETERS[index].length; indexParam++ ){
                        if(path.PARAMETERS[index][indexParam].DISCREPANCY_MISMATCH){
                            discrepancyFlag = true;
                            break;
                        }
                    }
                }
            }

        if(discrepancyFlag && !(this.state.discrepancy) && !(this.state.active)) {
            this.state.active = true;
            this.state.discrepancy = true;
        }
        const activeClass = this.state.active ? "displayAccordion" : "hideAccordion";
        return (
            <div className="accordion-container">
                <div>
                    <span className="summary" onClick={this.toggle}>
                        <div>{path.INVENTORY.PHYSICAL_NAME}</div>
                        <div>{path.INVENTORY.LOGICAL_NAME}</div>
                    </span>
                    <span><input type="checkbox" onChange={this.showAllAttributes}/>Show All</span>
                    <span className={`folding-pannel answer ${activeClass}`}>
                        {
                            path.PARAMETERS  ? 
                            <AttributeItem  key={path.SERVICE_PATH_ID} 
                                            index={path.SERVICE_PATH_ID} 
                                            details={path.PARAMETERS} 
                                            showAll={this.state.showAll}
                                            showAllPathAttributes={this.state.showAllPathAttributes} 
                                            />:''
                        }
                    </span>
                </div>
            </div>
        );
    }
}

export default AccordionPathItem;
