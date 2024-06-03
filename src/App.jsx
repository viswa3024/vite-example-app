import { useState } from 'react'
import MultiSelectDropdown from './components/MultiSelectDropdown';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <>
       <div>
      <h1>Multi-Select Dropdown Example</h1>
      <MultiSelectDropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        onChange={handleMultiSelectChange}
      />
      <div>Selected options: {selectedOptions.join(', ')}</div>
    </div>
    </>
  )
}

export default App
