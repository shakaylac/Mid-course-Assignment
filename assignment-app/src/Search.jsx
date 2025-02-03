import React, { useState } from "react";
import Nav from "./Nav";
import DropdownButton from "./DropdownButton";
import Table from "./Table";



function Search() {
    const userData = [
        {
            "User ID": "1",
            "Device Model": "Google Pixel 5",
            "Operating System": "Android",
            "App Usage Time (min/day)": "393",
            "Screen On Time (hours/day)": "6.4",
            "Battery Drain (mAh/day)": "1872",
            "Number of Apps Installed": "67",
            "Data Usage (MB/day)": "1122",
            "Age": "40",
            "Gender": "Male",
            "User Behavior Class": "4"
        },
        {
            "User ID": "2",
            "Device Model": "OnePlus 9",
            "Operating System": "Android",
            "App Usage Time (min/day)": "268",
            "Screen On Time (hours/day)": "4.7",
            "Battery Drain (mAh/day)": "1331",
            "Number of Apps Installed": "42",
            "Data Usage (MB/day)": "944",
            "Age": "47",
            "Gender": "Female",
            "User Behavior Class": "3"
        },
        {
            "User ID": "3",
            "Device Model": "Xiaomi Mi 11",
            "Operating System": "Android",
            "App Usage Time (min/day)": "154",
            "Screen On Time (hours/day)": "4.0",
            "Battery Drain (mAh/day)": "761",
            "Number of Apps Installed": "32",
            "Data Usage (MB/day)": "322",
            "Age": "42",
            "Gender": "Male",
            "User Behavior Class": "2"
        }
    ];

    const [filterKey, setFilterKey] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(userData);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleFilterChange = (filter) => {
        setFilterKey(filter);
    }

    const handleSearch = () => {
        let filtered = userData;

        if (filterKey && searchTerm) {
            filtered = filtered.filter(user => user[filterKey] && user[filterKey].toString().toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setFilteredData(filtered);
    }

    return (
        <>
            <Nav />
            <hr />
            <div className="container">
                <DropdownButton onFilterChange={handleFilterChange} />
                <div className="d-flex flex-column w-25">
                    <input
                        type="text"
                        placeholder="Search by Keyword"
                        className="mb-2 mt-2 rounded border-secondary-subtle"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="rounded border-0" onClick={handleSearch}>Search</button>
                </div>

                <div className="container mt-4">
                    {filteredData.length > 0 ? (
                        <Table data={filteredData} />
                    ) : (
                        <p>No Records To Display</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;

