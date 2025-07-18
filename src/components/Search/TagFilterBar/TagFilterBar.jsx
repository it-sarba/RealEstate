import React, { useState } from "react";
import "./TagFilterBar.css";

 export const TagFilterBar = ({
  tags = [],
  multiple = false,
  selected = [],
  onChange,
  clearable = true,
}) => {
  const [selectedTags, setSelectedTags] = useState(selected);

  const handleClick = (tag) => {
    let updated;

    if (multiple) {
      if (selectedTags.includes(tag)) {
        updated = selectedTags.filter((t) => t !== tag);
      } else {
        updated = [...selectedTags, tag];
      }
    } else {
      updated = selectedTags.includes(tag) ? [] : [tag];
    }

    setSelectedTags(updated);
    onChange && onChange(updated);
  };

  const clearAll = () => {
    setSelectedTags([]);
    onChange && onChange([]);
  };

  return (
    <div className="tag-filter-bar">
      <div className="tag-list">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-pill ${
              selectedTags.includes(tag) ? "selected" : ""
            }`}
            onClick={() => handleClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {clearable && selectedTags.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear
        </button>
      )}
    </div>
  );
};
export default TagFilterBar;