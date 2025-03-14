
function DropdownButton({ onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
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
