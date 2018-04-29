import React from 'react';
import PropTypes from 'prop-types';
import './Toaster.css';

const Toaster = ({ errors, dismiss }) => (
  <div className="Toaster">
    {
      errors.map((error, index) => (
        <div className="Toaster__Error" key={index} >{error.message}
          <span className="Toaster__Error--Dismiss" onClick={() => dismiss(error.id)}>dismiss</span>
        </div>
      ))
    }
  </div>
)

Toaster.propTypes = {
  errors: PropTypes.array,
  dismiss: PropTypes.func
}

export default Toaster;
