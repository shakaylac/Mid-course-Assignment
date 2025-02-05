import { useState } from "react";

function DropdownButton({ onFilterChange}) {


    const [selectedOption, setSelectedOption] = useState('Model');
 
    const handleChange = (e) => {
       const value =e.target.getAttribute("data-value");
       setSelectedOption(e.target.innerText);
       onFilterChange(value);


    }


    return(
        <div className="d-flex flex-column">
        <p>Select data point to filter search by</p>
        <div className="input-group">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul className="dropdown-menu">
                <li className="dropdown-item" data-value="model" onClick={handleChange}>Model</li>
                <li className="dropdown-item" data-value="gender" onClick={handleChange}>Gender</li>
                <li className="dropdown-item" data-value="operating-system" onClick={handleChange}>Operating System</li>
                <li className="dropdown-item" data-value="behavior-class" onClick={handleChange}>Behavior Class</li>
            </ul>
          </div>
        </div>

        
    )
}

export default DropdownButton;