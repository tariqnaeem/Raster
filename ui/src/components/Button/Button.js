import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../Loader';
import './Button.css';

const Button = (props) => {
  const { icon, type, disabled, loading,  ...rest } = props;
  const cls = classNames('Button', {
    'Button--icon': icon,
    'Button--secondary': type === 'secondary',
    'Button--disabled': disabled
  });
  return (
    <div className={cls} {...rest}>
      {loading ? <Loader color="white" /> : icon && <i className="Button__Icon material-icons">{icon}</i>}
      {props.children}
    </div>
  )
};

Button.defaultProps = {
  loading: false
}

Button.propTypes = {
  loading: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node
};

export default Button;
