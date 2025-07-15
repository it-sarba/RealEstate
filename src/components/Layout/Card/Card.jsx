import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, content, image, actions, className }) => {
  return (
    <div className={`card-container ${className}`}>
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title || "Card Image"} className="card-image" />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-description">{content}</p>}
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
