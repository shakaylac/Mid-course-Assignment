import React from "react";
import Nav from "./Nav";

function Search() {
    return(
        <>
            <Nav />
            <hr />

        <div className="container">
          <label>Select data point to filter search by</label>
          <div class="input-group">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Model</a></li>
                <li><a class="dropdown-item" href="#">Gender</a></li>
                <li><a class="dropdown-item" href="#">Operating System</a></li>
                <li><a class="dropdown-item" href="#">Behavior Class</a></li>
            </ul>

            <input type="text" placeholder="Search by Keyword"></input>
            <button>Search</button>
             <p> No Records To Display </p>
            <div className="container">
                <div className="row">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
            </div>
            </div>
        </div>        
        </>
    );
};

export default Search;