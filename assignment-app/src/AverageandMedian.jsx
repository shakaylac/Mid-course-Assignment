import React, { useEffect, useState } from "react";

const calculateAverage = (data, field) => {
    if (!data || data.length === 0) return 0;

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null && user[field] !== undefined && user[field] !== "");

    if (validData.length === 0) return 0;

    const sum = validData.reduce((acc, user) => acc + parseFloat(user[field] || 0), 0);
    const avg = sum / validData.length;

    return avg.toFixed(0);
};

const calculateMedian = (data, field) => {
    if (!data || data.length === 0) return 0;

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null);

    if (validData.length === 0) return 0;
    const sortedData = validData.map(user => parseFloat(user[field])).sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(1);
    }

    return sortedData[middle].toFixed(1);
};



function AverageandMedian({ filteredData }) {
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        if (Array.isArray(filteredData) && filteredData.length > 0) {
            setIsDataLoading(false);  
        }
    }, [filteredData]);

    const isDataEmpty = !Array.isArray(filteredData) || filteredData.length === 0; 

    
    return (
        <div className="d-flex flex-row text-center gap-3">
            <div className="border w-25">
                <p><strong>Average Usage Time (min/day)</strong></p>
                <p>Average: {isDataEmpty ? "0 minutes" : `${calculateAverage(filteredData, "App Usage Time (min/day)")} minutes`}</p>
                <p>Median: {isDataEmpty ? "0 minutes" : `${calculateMedian(filteredData, "App Usage Time (min/day)")} minutes`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Screen On Time (hours/day)</strong></p>
                <p>Average: {isDataEmpty ? "0 hours" : `${calculateAverage(filteredData, "Screen On Time (hours/day)")} hours`}</p>
                <p>Median: {isDataEmpty ? "0 hours" : `${calculateMedian(filteredData, "Screen On Time (hours/day)")} hours`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Number of Apps Installed</strong></p>
                <p>Average: {isDataEmpty ? "0 Apps" : `${calculateAverage(filteredData, "Number of Apps Installed")} Apps`}</p>
                <p>Median: {isDataEmpty ? "0 Apps" : `${calculateMedian(filteredData, "Number of Apps Installed")} Apps`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Age</strong></p>
                <p>Average: {isDataEmpty ? "0 Years Old" : `${calculateAverage(filteredData, "Age")} Years Old`}</p>
                <p>Median: {isDataEmpty ? "0 Years Old" : `${calculateMedian(filteredData, "Age")} Years Old`}</p>
            </div>
        </div>
    );
}

export default AverageandMedian;




















/*import React from "react";

const calculateAverage = (data, field) => {
    if (!data || data.length === 0) return 0;  

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null && user[field] !== undefined && user[field] !== "");

    if (validData.length === 0) return 0;  

    const sum = validData.reduce((acc, user) => acc + parseFloat(user[field] || 0), 0);
    const avg = sum / validData.length;

    return avg.toFixed(0);  
};

const calculateMedian = (data, field) => {
    if (!data || data.length === 0) return 0;  

    const validData = data.filter(user => !isNaN(user[field]) && user[field] !== null);

    if (validData.length === 0) return 0;  
    const sortedData = validData.map(user => parseFloat(user[field])).sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(1);  
    }

    return sortedData[middle].toFixed(1);  
};

function AverageandMedian({ filteredData }) {    
    const isDataEmpty = !Array.isArray(filteredData) || filteredData.length === 0;

    return (
        <div className="d-flex flex-row text-center gap-3">
            <div className="border w-25">
                <p><strong>Average Usage Time (min/day)</strong></p>
                <p>Average: {isDataEmpty ? "0 minutes" : `${calculateAverage(filteredData, "App Usage Time (min/day)")} minutes`}</p>
                <p>Median: {isDataEmpty ? "0 minutes" : `${calculateMedian(filteredData, "App Usage Time (min/day)")} minutes`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Screen On Time (hours/day)</strong></p>
                <p>Average: {isDataEmpty ? "0 hours" : `${calculateAverage(filteredData, "Screen On Time (hours/day)")} hours`}</p>
                <p>Median: {isDataEmpty ? "0 hours" : `${calculateMedian(filteredData, "Screen On Time (hours/day)")} hours`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Number of Apps Installed</strong></p>
                <p>Average: {isDataEmpty ? "0 Apps" : `${calculateAverage(filteredData, "Number of Apps Installed")} Apps`}</p>
                <p>Median: {isDataEmpty ? "0 Apps" : `${calculateMedian(filteredData, "Number of Apps Installed")} Apps`}</p>
            </div>

            <div className="border w-25">
                <p><strong>Age</strong></p>
                <p>Average: {isDataEmpty ? "0 Years Old" : `${calculateAverage(filteredData, "Age")} Years Old`}</p>
                <p>Median: {isDataEmpty ? "0 Years Old" : `${calculateMedian(filteredData, "Age")} Years Old`}</p>
            </div>
        </div>
    );
}

export default AverageandMedian;

*/

