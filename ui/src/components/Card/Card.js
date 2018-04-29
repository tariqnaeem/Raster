import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.css'

const Card = ({ children, header, whitespace }) => {
  const cls = classNames('Card__Content', {
    'Card__Content--whitespace': whitespace
  })

  return (
    <div className="Card">
      <div className="Card__Header">{header}</div>
      <div className={cls}>
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  whitespace: true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  whitespace: PropTypes.bool
}

export default Card;
