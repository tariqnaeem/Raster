import React, { Component } from 'react';
import AccordionPathItem   from './path';
import ServiceAttributeItem  from './serviceAttribute';
import { DEVICES_ORDER } from '../../constants';


class AccordionServiceItem extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            discrepancy: false,
            showAll: false
        };
        
        this.toggle = this.toggle.bind(this);
        this.showAllAttributes = this.showAllAttributes.bind(this);

    }

    showAllAttributes() {
        this.setState({showAll : !(this.state.showAll)});
    }

    toggle() {
      
        this.setState({
            active: !this.state.active,
            discrepancy: true
        });
    }
    

    render() {

        const  service = this.props.details;

        var servicePaths = [];
        /**
         * SORT Switches(Service Paths)
         */
        if(service !=null && service.PATHS !=null){
            for(var index = 0; index < DEVICES_ORDER.length; index++){
                for(var indexParam = 0; indexParam < service.PATHS.length; indexParam++ ){
                    if(service.PATHS[indexParam].INVENTORY.PHYSICAL_NAME.includes(DEVICES_ORDER[index])){
                        servicePaths.push(service.PATHS[indexParam]);
                    }
                }
            }
        }

        if(service.DISCREPANCY_MISMATCH && !(this.state.discrepancy) && !(this.state.active)) {
            this.state.active = true;
            this.state.discrepancy = true;
        }

        const activeClass = this.state.active ? "active" : "inactive";

        return (
            <div className="accordion-container">
                <div className={activeClass} >
                    <span className="summary" onClick={this.toggle}>
                        <div>
                            <span className="summary"><b>{service.SERVICE_NAME}&nbsp;&nbsp;</b></span>
                            <span><ServiceAttributeItem  key={service.SERVICE_NAME} details={service.PARAMETERS}/></span>
                        </div>
                    </span>
                    <span className="folding-pannel">
                        <div>{service && servicePaths ? servicePaths.map((path, index) =>
                                                                                        <AccordionPathItem    
                                                                                        key={path.SERVICE_PATH_ID}
                                                                                        index={index}
                                                                                        details={path}
                                                                                        showAll={this.state.showAll} />) : ''}
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default AccordionServiceItem;
