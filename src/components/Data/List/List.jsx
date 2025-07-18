import React from "react";
import "./List.css";

export const List = ({
  items = [],
  ordered = false,
  icon = null,
  renderItem,
}) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className="custom-list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {icon && <span className="list-icon">{icon}</span>}
          {renderItem ? renderItem(item, index) : <span>{item}</span>}
        </li>
      ))}
    </ListTag>
  );
};
export default List;