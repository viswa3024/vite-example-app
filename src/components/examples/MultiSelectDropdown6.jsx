import React, { useState, useEffect, useRef } from 'react';

const MultiSelectDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    let newSelectedOptions = [];

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, option];
    } else {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleCheckboxChange = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    let newSelectedOptions = [];

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, option];
    } else {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    onChange([]);
  };

  return (
    <div className="multiselect-dropdown" ref={dropdownRef}>
      <div className="selected-options" onClick={toggleDropdown}>
        
        {selectedOptions.length > 0 ? (<>
          <div className="selected-count">{selectedOptions.length}</div> selected
          <div className="clear-all" onClick={handleClearAll}>
            &#10005;
          </div>
          </>) : <>
          <div>Select options</div>
          </>}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
