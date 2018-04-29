import React from 'react';
import { connect } from 'react-redux';
import { populateGraph } from '../../actions';
import Toogle from '../../components/Toogle';

const ToogleGraph = ({ populateGraph}) =>(
    <Toogle populateGraph={populateGraph}/>
);

const mapDispatchToProps = {
    populateGraph: populateGraph.request
}

export default connect(undefined, mapDispatchToProps)(ToogleGraph);
