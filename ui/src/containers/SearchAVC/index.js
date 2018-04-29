import React from 'react';
import { connect } from 'react-redux';

const SearchAVC = () => {

    return (

        <div className="Control">
        <input type="text" className="form-control" placeholder="Search for..."/>
        </div>

    )
}


const mapDispatchToProps = {
    SearchAVC
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchAVC);
