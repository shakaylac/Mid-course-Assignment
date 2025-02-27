import { useState } from "react";

function DropdownButton({ onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value); // Pass the selected filter to the parent (Search.jsx)
  };

  return (
    <select onChange={handleChange}>
      <option value="Device Model">Model</option>
      <option value="Gender">Gender</option>
      <option value="Operating System">Operating System</option>
      <option value="User Behavior Class">Behavior Class</option>
    </select>
  );
}

export default DropdownButton;
