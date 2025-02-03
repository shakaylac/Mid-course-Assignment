import React, { useState } from "react";

function Table({ data }) {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <table className="table table-striped">
            <thead>
                <tr className="fw-bold">
                    <th>User ID</th>
                    <th>Device Model</th>
                    <th>Operating System</th>
                    <th>App Usage Time (min/day)</th>
                    <th>Screen On Time (hours/day)</th>
                    <th>Battery Drain (mAh/day)</th>
                    <th>Number of Apps Installed</th>
                    <th>Data Usage (MB/day)</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>User Behavior Class</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user["User ID"]}</td>
                        <td>{user["Device Model"]}</td>
                        <td>{user["Operating System"]}</td>
                        <td>{user["App Usage Time (min/day)"]}</td>
                        <td>{user["Screen On Time (hours/day)"]}</td>
                        <td>{user["Battery Drain (mAh/day)"]}</td>
                        <td>{user["Number of Apps Installed"]}</td>
                        <td>{user["Data Usage (MB/day)"]}</td>
                        <td>{user["Age"]}</td>
                        <td>{user["Gender"]}</td>
                        <td>{user["User Behavior Class"]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;