import React, { useState } from 'react';

const MultiSelectDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  return (
    <div className="multiselect-dropdown">
      <div className="selected-options" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={selectedOptions.includes(option) ? 'selected' : ''}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
