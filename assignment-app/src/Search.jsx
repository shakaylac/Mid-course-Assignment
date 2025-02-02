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
                  <div className="col border border-dark m-5 p-3">App Usage Time (min/day) </div>
                  <div className="col border border-dark m-5 p-3">Screen on time (hours/day)</div>
                  <div className="col border border-dark m-5 p-3">Number of Apps Installed</div>
                  <div className="col border border-dark m-5 p-3">Age</div>
                </div>
                <table>
                    <thead className="fw-bold">
                        <tr>
                    <th scope="col">User</th> 
                    <th scope="col">ID</th>
                    <th scope="col">Device Model</th>
                    <th scope="col">Operating System</th>
                    <th scope="col">App Usage Time (min/day)</th>
                    <th scope="col">Screen On Time (hours/day)</th>
                    <th scope="col">Battery Drain (mAh/day)</th>
                    <th scope="col">Number of Apps Installed</th>
                    <th scope="col">Data Usage (MB/day)</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">User Behavior Class</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            </div>      
        </>
    );
};

export default Search;