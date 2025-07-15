import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Textarea.css';

const Textarea = React.forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="textarea-wrapper">
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        ref={ref}
        className={classNames('textarea-field', error && 'textarea-error', className)}
        {...props}
      />
      {error && <span className="textarea-error-message">{error}</span>}
    </div>
  );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Textarea;
