import React from "react";

const calculateAverage = (data, field) => {
    if(!data || data.length === 0) return 0;

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null);

    if(validData.length === 0) return 0;
    const sum = validData.reduce((acc, user) => acc + user[field], 0);
    return (sum / validData.length).toFixed(1); 
};

const calculateMedian = (data, field) => {
    if(!data || data.length === 0) return 0;

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null);

    if(validData.length === 0) return 0;

    const sortedData = data.map(user => user[field]).sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(1);
    }
    return sortedData[middle].toFixed(1);
};

function AverageandMedian({ filteredData }) {    
    if (!Array.isArray(filteredData) || filteredData.length === 0) {
        return <p>No data to calculate average or median</p>;
    }

    return (
        <div className="d-flex flex-row text-center gap-3">
            <div className="border w-25">
                <p><strong>Average Usage Time (min/day)</strong></p>
                <p>Average: {calculateAverage(filteredData, "App Usage Time (min/day)")} minutes</p>
                <p>Median: {calculateMedian(filteredData, "App Usage Time (min/day)")} minutes</p>
            </div>

            <div className="border w-25">
                <p><strong>Screen On Time (hours/day)</strong></p>
                <p>Average: {calculateAverage(filteredData, "Screen On Time (hours/day)")} hours</p>
                <p>Median: {calculateMedian(filteredData, "Screen On Time (hours/day)")} hours</p>
            </div>

            <div className="border w-25">
                <p><strong>Number of Apps Installed</strong></p>
                <p>Average: {calculateAverage(filteredData, "Number of Apps Installed")} Apps</p>
                <p>Median: {calculateMedian(filteredData, "Number of Apps Installed")} Apps</p>
            </div>

            <div className="border w-25">
                <p><strong>Age</strong></p>
                <p>Average: {calculateAverage(filteredData, "Age")} Years Old</p>
                <p>Median: {calculateMedian(filteredData, "Age")} Years Old</p>
            </div>
        </div>
    );
}

export default AverageandMedian;


