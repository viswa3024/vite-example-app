import { useState } from 'react'
import MultiSelectDropdown from './components/MultiSelectDropdown';
import Dropdown from './components/Dropdown';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };


  const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };


  return (
    <>
       <div>
      <h1>Multi-Select Dropdown Example</h1>
      <MultiSelectDropdown
        options={['Option 1', 'Option 2', 'Option 3',  'Option 4',  'Option 5',  'Option 6',  'Option 7',  'Option 8',  'Option 9',  'Option 10']}
        onChange={handleMultiSelectChange}
      />
       <Dropdown 
                options={options} 
                onChange={handleChange} 
                placeholder="Select a flavor" 
            />
      <div>Selected options: {selectedOptions.join(', ')}</div>
    </div>
    </>
  )
}

export default App
