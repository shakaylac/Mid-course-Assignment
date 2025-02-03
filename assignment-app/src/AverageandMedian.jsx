import React from "react";

const calculateAverage = (data, field) => {
    const sum = data.reduce((acc, user) => acc + user[field], 0);
    return (sum / data.length).toFixed(2); 
};

const calculateMedian = (data, field) => {
    const sortedData = data.map(user => user[field]).sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(2);
    }
    return sortedData[middle].toFixed(2);
};

function AverageandMedian({ filteredData }) {    
    if (!Array.isArray(filteredData) || filteredData.length === 0) {
        return <p>No data to calculate average or median</p>;
    }

    return (
        <div className="d-flex flex-row text-center gap-3">
            <div className="border w-25">
                <p><strong>Average Usage Time (min/day)</strong></p>
                <p>Average: {calculateAverage(filteredData, "App Usage Time (min/day)")}</p>
                <p>Median: {calculateMedian(filteredData, "App Usage Time (min/day)")}</p>
            </div>

            <div className="border w-25">
                <p><strong>Screen On Time (hours/day)</strong></p>
                <p>Average: {calculateAverage(filteredData, "Screen On Time (hours/day)")}</p>
                <p>Median: {calculateMedian(filteredData, "Screen On Time (hours/day)")}</p>
            </div>

            <div className="border w-25">
                <p><strong>Number of Apps Installed</strong></p>
                <p>Average: {calculateAverage(filteredData, "Number of Apps Installed")}</p>
                <p>Median: {calculateMedian(filteredData, "Number of Apps Installed")}</p>
            </div>

            <div className="border w-25">
                <p><strong>Age</strong></p>
                <p>Average: {calculateAverage(filteredData, "Age")}</p>
                <p>Median: {calculateMedian(filteredData, "Age")}</p>
            </div>
        </div>
    );
}

export default AverageandMedian;


















/*import React from "react";


const getAverage = (data, field) => {
    const sum = data.reduce((acc, user) => acc + user[field], 0);
    return (sum/data.length).toFixed(2);
}

const getMedian = (data, feild) => {
    const sortedData = data.map(user => use[feild]).sort((a, b) => a - b);
    const middle = math.floor(__staticRouterHydrationData.length / 2);
    if (__staticRouterHydrationData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(2);
    }

    return sortedData[middle].toFixed(2);

 };

function AverageandMedian({ filteredData}) {
    


    return(

        <div className="d-flex flex-row text-center gap-3">
            <div className="border w-25">
                <p><strong>Average Usage Time (min/day)</strong></p>

                <p>Average- {getAverage(filteredData)}</p>
                <p>Median- </p>
            </div>

            <div className="border w-25">
                <p><strong>Screen On Time (hours/day)</strong></p>

                <p>Average-  {getAverage(filteredData)}</p>
                <p>Median- </p>
            </div>

            <div className="border w-25">
                <p><strong>Number of Apps Installed</strong></p>

                <p>Average-  {getAverage(filteredData)}</p>
                <p>Median- </p>
            </div>

            <div className="border w-25">
                <p><strong>Age</strong></p>

                <p>Average-  {getAverage(filteredData)}</p>
                <p>Median- </p>
            </div>

        </div>
    );
};

export default AverageandMedian;

*/