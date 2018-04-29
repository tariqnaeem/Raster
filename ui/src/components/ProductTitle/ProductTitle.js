import React from 'react';
import PropTypes from 'prop-types';
import './ProductTitle.css';

const ProductTitle = ({ title, subtitle }) => (
  <div className="ProductTitle">
    <div className="ProductTitle">{title} <span className="ProductTitle--sub">{subtitle}</span></div>
  </div>
)

ProductTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default ProductTitle;
