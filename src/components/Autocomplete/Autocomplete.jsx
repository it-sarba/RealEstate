import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { HiOutlineSearch } from "react-icons/hi";
import "./Autocomplete.css";

 export const Autocomplete = ({ options, onSelect, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (inputValue) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredOptions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, options]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      selectOption(filteredOptions[activeIndex]);
    }
  };

  const selectOption = (value) => {
    setInputValue(value);
    onSelect(value);
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  return (
    <div className="autocomplete-wrapper" ref={wrapperRef}>
      <div className="autocomplete-input-wrapper">
        <HiOutlineSearch className="autocomplete-icon" />
        <input
          type="text"
          className="autocomplete-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
        />
      </div>
      {showSuggestions && filteredOptions.length > 0 && (
        <ul className="autocomplete-list">
          {filteredOptions.map((option, idx) => (
            <li
              key={option}
              className={`autocomplete-item ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => selectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Autocomplete;
