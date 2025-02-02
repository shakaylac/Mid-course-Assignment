import { useState } from "react";

function DropdownButton() {
    const [selectedOption, setModelOption] = useState('');
 
    const onChange = (e) => {
        setModelOption(e.target.value);

        if (e.target.value === 'model') {
            
        } else if (e.target.value === 'gender') {

        }else if (e.target.value === 'operating-system') {

        }else (e.target.value === 'behavior-class') 

        
    }


    return(
        <div className="d-flex flex-column">
        <p>Select data point to filter search by</p>
        <div class="input-group">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
          <ul className="dropdown-menu" value={selectedOption} onChange={onChange}>
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