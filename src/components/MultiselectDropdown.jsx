import React, { useState } from 'react';
import './Multiselect.css'

const MultiselectDropdown = ({ value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value); // State variable to store the selected values

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target; // Extracting value and checked properties from the checkbox input

    if (checked) {
      setSelectedValues((prevSelectedValues) => [
        ...prevSelectedValues,
        checkboxValue,                  
      ]);   // If checkbox is checked, add the value to the selectedValues array
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((val) => val !== checkboxValue)  // If checkbox is unchecked, remove the value from the selectedValues array
      );
    }
  };

  return (
    <div className="multiselect">         {/*Container for the multiselect dropdown*/}
      <div className="selected-values">    {/* Display the selected values */}
        {selectedValues.length > 0 ? (      //If there are selected values  
          selectedValues.join(', ')        // dispaly the seleted value separeted by coma
        ) : (
          <span className="placeholder">Select options</span>    //If no values are selected, display a placeholder text
        )}  
      </div>
      <div className={`dropdown ${readonly ? 'readonly' : ''}`}>        {/* Dropdown container */}
        {['1', '2', '3'].map((option) => (                              // Map over the options array
          <label key={option}>   {/* Label for each checkbox */}
            <input
              type="checkbox"
              value={option} // Set the value of the checkbox to the current option
              checked={selectedValues.includes(option)} // Check if the option is present in the selectedValues array
              onChange={handleCheckboxChange} // Handle checkbox change event
              disabled={readonly} // Disable checkboxes if readonly is true
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiselectDropdown;
