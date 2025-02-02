import React from "react";
import Nav from "./Nav";
import DropdownButton from "./DropdownButton";
import Table from "./Table";

function Search() {
    return(
        <>
            <Nav />
            <hr />

        <div className="container">
            <DropdownButton />

            <div className="d-flex flex-column w-25">
                <input type="text" placeholder="Search by Keyword" className="mb-2 mt-2 rounded border-secondary-subtle"></input>
                <button className="rounded border-0">Search</button>
            </div>
                <p> No Records To Display </p>
                <div className="container">
                    <div className="row">
                    <div className="col border">App Usage Time (min/day) </div>
                    <div className="col border">Screen on time (hours/day)</div>
                    <div className="col border">Number of Apps Installed</div>
                    <div className="col border">Age</div>
                    </div>
                </div>

                <Table />
            </div>
     
        </>
    );
};

export default Search;