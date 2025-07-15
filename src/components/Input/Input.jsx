import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css'; 

const Input = React.forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        ref={ref}
        className={classNames('input-field', error && 'input-error', className)}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
