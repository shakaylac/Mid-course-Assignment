const fs = require('fs');

// Read the dataset file (adjust the path to your file)
const data = fs.readFileSync('data.json', 'utf-8');

// Parse the JSON data
let users = JSON.parse(data);

// Apply parseInt/parseFloat to relevant fields
users = users.map(user => ({
    ...user,
    "App Usage Time (min/day)": parseFloat(user["App Usage Time (min/day)"]),
    "Screen On Time (hours/day)": parseFloat(user["Screen On Time (hours/day)"]),
    "Battery Drain (mAh/day)": parseInt(user["Battery Drain (mAh/day)"]),
    "Number of Apps Installed": parseInt(user["Number of Apps Installed"]),
    "Data Usage (MB/day)": parseInt(user["Data Usage (MB/day)"]),
    "Age": parseInt(user["Age"]),
    "User Behavior Class": parseInt(user["User Behavior Class"])
}));

// Write the updated data back to a new file
fs.writeFileSync('updatedData.json', JSON.stringify(users, null, 2), 'utf-8');

console.log("Data has been updated!");
