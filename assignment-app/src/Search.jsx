import React from "react";
import Nav from "./Nav";

function Search() {
    return(
        <>
            <Nav />
            <hr />

        <div className="container-sm">
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
                </table>
            </div>
            </div>
        </div>        
        </>
    );
};

export default Search;