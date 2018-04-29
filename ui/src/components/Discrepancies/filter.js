import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {AccordionServiceItem} from '../Accordion';
import _ from 'lodash';
import './style.css';
import { Row, Col } from 'react-flexbox-grid';



class Filters extends Component {

    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            COUNT_DISCREPANCY_MISMATCH: 0,
            COUNT_IN_FULFILMENT: 0,
            COUNT_IN_NETWORK: 0,
            COUNT_NONE: 0,
            COUNT_AVCS:0,
            serviceObjs:[]

        };
        this.filterServices = this.filterServices.bind(this);
        this.serviceCount = this.serviceCount.bind(this);
        this.filterBtnClass = 'btn btn-outline-secondary filterBtnAlignment';
       

    }

    /** Retrieve all service counts */
    serviceCount(){
        this.state.COUNT_AVCS = this.props.details.length;

        this.state.COUNT_DISCREPANCY_MISMATCH = _.filter(this.props.details, function(obj) {
            if (obj['DISCREPANCY_MISMATCH'] == true) return obj;
        }).length;
        this.state.COUNT_IN_FULFILMENT = _.filter(this.props.details, function(obj) {
            if (obj['IN_FULFILMENT'] == true && obj['IN_NETWORK'] == false) return obj;
        }).length;
        this.state.COUNT_IN_NETWORK = _.filter(this.props.details, function(obj) {
            if (obj['IN_NETWORK'] == true && obj['IN_FULFILMENT'] == false) return obj;
        }).length;
        this.state.COUNT_NONE = _.filter(this.props.details, function(obj) {
            if (obj['IN_FULFILMENT'] == false && obj['IN_NETWORK'] == false ) return obj;
        }).length;
    }

    componentWillMount(){
        /** Calling AVC's with discrepancies **/
        this.serviceCount();
        this.filterServices(this.state.activeIndex, this.state.filter);

    }


    /** Filter services based on the provided flag values true/false **/
    filterServices(index, action) {

        this.state.serviceObjs = [];
        console.log(this.props.details);
        if(index == 4){
            /** Show All AVC's */

            this.state.serviceObjs = this.props.details;
        }
        else if (index == 1) { /** AVC's not in Network */

            this.state.serviceObjs = _.filter(this.props.details, function(obj) {
                if (obj['IN_NETWORK'] == false && obj['IN_FULFILMENT'] == true) return obj;
            });
        }
        else if(index == 2) { /** AVC's not in Fulfilment */
            this.state.serviceObjs = _.filter(this.props.details, function(obj) {
                if (obj['IN_NETWORK'] == true && obj['IN_FULFILMENT'] == false) return obj;
            });
        }
        else if(index == 3) {
            /** Scenerio where an AVC neither exists in FLS or Network */
            this.state.serviceObjs = _.filter(this.props.details, function(obj) {
                if (obj['IN_FULFILMENT'] == false && obj['IN_NETWORK'] == false ) return obj;
            });
        }
        else if(index == 0) {
            this.state.serviceObjs = _.filter(this.props.details, function(obj) {
                if (obj['DISCREPANCY_MISMATCH'] == true) return obj;
            });
        }
        /** Setting the active tab **/
        this.setState({activeIndex: index, filter: action});
    }

    render() {

        return(
            <Row className="App__Header" start="xs"  middle="xs">
                <Col xs={12}>
                    <div className="filterBtn">
                    {
                        <div className="btn-group" data-toggle="buttons">
                            <label  className={this.state.activeIndex == 4 ? 
                                    this.filterBtnClass +' active' : this.filterBtnClass}
                                    onClick={this.filterServices.bind(this, 4,'')}>
                                <span>Total AVCs</span> ({this.state.COUNT_AVCS})
                            </label>
                            <label  className={this.state.activeIndex == 0 ? this.filterBtnClass +' active' : this.filterBtnClass}
                                    onClick={this.filterServices.bind(this, 0,'DISCREPANCY_MISMATCH')}>
                                    AVCs with fields not matching ({this.state.COUNT_DISCREPANCY_MISMATCH})
                            </label>
                            <label  className={this.state.activeIndex == 1 ? this.filterBtnClass +' active' : this.filterBtnClass}
                                    onClick={this.filterServices.bind(this, 1,'IN_NETWORK')}>
                                    AVCs not showing up in Network ({this.state.COUNT_IN_FULFILMENT})
                            </label>
                            <label  className={this.state.activeIndex == 2 ? this.filterBtnClass +' active' : this.filterBtnClass}
                                    onClick={this.filterServices.bind(this, 2,'IN_FULFILMENT')}>
                                    AVCs not showing up in FLS ({this.state.COUNT_IN_NETWORK})
                            </label>
                            <label  className={this.state.activeIndex == 3 ? this.filterBtnClass +' active' : this.filterBtnClass}
                                    onClick={this.filterServices.bind(this, 3,'NONE')}>
                                    AVCs not showing up in FLS or Network  ({this.state.COUNT_NONE})
                            </label>
                        </div>
                    }
                    </div>
        {
            this.state.serviceObjs ? this.state.serviceObjs.map(service => 
                <AccordionServiceItem   key={service.SERVICE_NAME}
                                        index={service.SERVICE_NAME}
                                        details={service}
                                        filter={this.state.filter}
                                        />):''
        }

    </Col>
        </Row>

    )
    }
}
export default Filters;







