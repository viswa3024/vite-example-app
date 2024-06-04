// src/Dropdown.js
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, placeholder, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) onChange(option);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label : placeholder}
                <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`dropdown-list-item ${selectedOption && selectedOption.value === option.value ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                            {selectedOption && selectedOption.value === option.value && <span className="checkmark">✓</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
