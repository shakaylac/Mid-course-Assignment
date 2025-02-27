import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Table from "./Table";
import DropdownButton from "./DropdownButton";
import AverageandMedian from "./AverageandMedian";

function Search() {
  const [userData, setUserData] = useState([]);
  const [filterKey, setFilterKey] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/search");

        if (!response.ok) {
          throw new Error('http error! status: ${response.status}');
        }

        const data = await response.json();
        setUserData(data);
        setFilteredData(data); // Show all data initially
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilterKey(filter);
  };

  const handleSearch = () => {
    let filtered = userData;
  
    // Filter by category if selected
    if (filterKey && searchTerm) {
      if (filterKey === "Gender") {
        // For Gender field, perform an exact match (case-insensitive)
        filtered = userData.filter(user =>
          user[filterKey] && user[filterKey].toString().toLowerCase() === searchTerm.toLowerCase()
        );
      } else {
        // For other fields, allow partial matches (substring match)
        filtered = userData.filter(user =>
          user[filterKey] && user[filterKey].toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    } else if (searchTerm) {
      // If no filter is selected, filter by the general search term across all fields
      filtered = userData.filter(user =>
        Object.values(user).some(value =>
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  
    setFilteredData(filtered);
    setIsVisible(true);
  };
  

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
            className="mb-2 mt-2 rounded border-secondary-subtle focus-ring-primary"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button" className="btn btn-outline-secondary rounded" onClick={handleSearch}>Search</button>
        </div>
        <p>Displaying {filteredData.length > 0 ? filteredData.length : 0} Records</p>
        {filteredData.length > 0 && <AverageandMedian filteredData={filteredData} />}
        <div className="container mt-4">
          <Table data={filteredData} isVisible={isVisible} />
        </div>
      </div>
    </>
  );
}

export default Search;

 

