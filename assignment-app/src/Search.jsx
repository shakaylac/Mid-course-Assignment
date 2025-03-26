import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Table from "./Table";
import DropdownButton from "./DropdownButton";
import AverageandMedian from "./AverageandMedian";

function Search() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterKey, setFilterKey] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    const savedSearchTerm = sessionStorage.getItem("searchTerm");
    const savedFilterKey = sessionStorage.getItem("filterKey");
    const savedFilteredData = sessionStorage.getItem("filteredData");
  
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
    if (savedFilterKey) {
      setFilterKey(savedFilterKey);
    }
    if (savedFilteredData) {
      setFilteredData(JSON.parse(savedFilteredData));
    }

    setIsVisible(true);

  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/data/search");

        if (!response.ok) {
          throw new Error('http error! status: ${response.status}');
        }

        const data = await response.json();
        setUserData(data);

        const savedFilteredData = sessionStorage.getItem("filteredData");
        if (!savedFilteredData) {
          setFilteredData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
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

    if (filterKey && searchTerm) {
      if (filterKey === "Gender") {
        filtered = userData.filter(user =>
          user[filterKey] && user[filterKey].toString().toLowerCase() === searchTerm.toLowerCase()
        );
      } else {
        filtered = userData.filter(user =>
          user[filterKey] && user[filterKey].toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    } else if (searchTerm) {
      filtered = userData.filter(user =>
        Object.values(user).some(value =>
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredData(filtered);
    setIsVisible(true);
    setIsSearchClicked(true);

    sessionStorage.setItem("searchTerm", searchTerm);
    sessionStorage.setItem("filterKey", filterKey);
    sessionStorage.setItem("filteredData", JSON.stringify(filtered)); 
  };

  

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredData(userData); 
    setIsVisible(false); 
    setIsSearchClicked(false);

    sessionStorage.removeItem("searchTerm");
    sessionStorage.removeItem("filterKey");
    sessionStorage.removeItem("filteredData");
  };

  return (
    <>
      <Nav />
      <hr />
      <div className="container">
        <DropdownButton onFilterChange={handleFilterChange} />
        <div className="d-flex flex-column w-25">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search by Keyword"
              className="mb-2 mt-2 rounded border-secondary-subtle focus-ring-primary"
              style={{position: "relative"}}
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search field"
            />
            {searchTerm && (
              <button
                type="button"
                className="btn btn-link p-0 ms-2 text-decoration-none"
                style={{color:"black", position:"absolute", left:"19%", top:"125px"}}
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                <p>X</p> 
              </button>
            )}
          </div>
          <button type="button" className="btn btn-outline-secondary rounded" onClick={handleSearch}>Search</button>
        </div>

        <p>
          {isLoading
          ? "Loading..."
          : `Displaying ${filteredData.length > 0 ? filteredData.length : 0} Records`}
        </p>

        {filteredData.length > 0 && <AverageandMedian filteredData={filteredData} />}
  
        {!isSearchClicked && filteredData.length === 0 && <AverageandMedian filteredData={[]} />}

        <div className="container mt-4">
          {filteredData && <Table data={filteredData} isVisible={isVisible}/>}
        </div>
      </div>
    </>
  );
}

export default Search;
