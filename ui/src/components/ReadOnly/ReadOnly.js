import React from 'react';
import PropTypes from 'prop-types';
import './ReadOnly.css'

const ReadOnly = ({ children }) => (
  <div className="ReadOnly">
    <div className="ReadOnly__Field">{children}</div>
    <div className="ReadOnly__Note">Field disabled.</div>
  </div>
);

ReadOnly.propTypes = {
  children: PropTypes.string
}

export default ReadOnly;
