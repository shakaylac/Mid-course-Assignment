import React from "react";
import Nav from "./Nav";

function Search() {
    return(
        <>
            <Nav />
            <hr />

        <div className="container">
            <div className="d-flex flex-column">
          <label>Select data point to filter search by</label>
          <div class="input-group">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Model</a></li>
                <li><a class="dropdown-item" href="#">Gender</a></li>
                <li><a class="dropdown-item" href="#">Operating System</a></li>
                <li><a class="dropdown-item" href="#">Behavior Class</a></li>
            </ul>
            </div>

            <input type="text" placeholder="Search by Keyword"></input>
            <button>Search</button>
             <p> No Records To Display </p>
            <div className="container">
                <div className="row">
                  <div className="col">App Usage Time (min/day) </div>
                  <div className="col">Screen on time (hours/day)</div>
                  <div className="col">Number of Apps Installed</div>
                  <div className="col">Age</div>
                </div>
            </div>
            </div>
        </div>        
        </>
    );
};

export default Search;