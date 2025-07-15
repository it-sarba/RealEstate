import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';
import classNames from 'classnames';

const IconButton = ({ icon, label, size = 'medium', onClick, className, ...props }) => {
  return (
    <button
      className={classNames('icon-button', `icon-button--${size}`, className)}
      onClick={onClick}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired, 
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default IconButton;
