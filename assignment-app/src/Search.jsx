import React from "react";
import Nav from "./Nav";
import DropdownButton from "./DropdownButton";

function Search() {
    return(
        <>
            <Nav />
            <hr />

        <div className="container">
            <DropdownButton />

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
     
        </>
    );
};

export default Search;