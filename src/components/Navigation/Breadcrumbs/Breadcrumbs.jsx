import React from "react";
import "./Breadcrumbs.css";

 export const Breadcrumbs = ({ items, separator = "/" }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <>
                <a href={item.href} className="breadcrumb-link">
                  {item.label}
                </a>
                <span className="breadcrumb-separator">{separator}</span>
              </>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;