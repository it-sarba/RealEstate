import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading && <span className="spinner" />}
      {icon && iconPosition === 'left' && <span className="icon">{icon}</span>}
      <span className="label">{label}</span>
      {icon && iconPosition === 'right' && <span className="icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
