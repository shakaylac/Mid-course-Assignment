import { useState } from "react";

function DropdownButton({ onFilterChange}) {


    const [selectedOption, setSelectedOption] = useState('Model');
 
    const handleChange = (e) => {
       const value =e.target.getAttribute("value");
       setSelectedOption(value);
       onFilterChange(value);


    }


    return(
        <div className="d-flex flex-column">
        <p>Select data point to filter search by</p>
        <div className="input-group">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul className="dropdown-menu" value={selectedOption} onChange={handleChange}>
                <li className="dropdown-item" value="model">Model</li>
                <li className="dropdown-item" value="gender">Gender</li>
                <li className="dropdown-item" value="operating-system">Operating System</li>
                <li className="dropdown-item" value="behavior-class">Behavior Class</li>
            </ul>
          </div>
        </div>

        
    )
}

export default DropdownButton;