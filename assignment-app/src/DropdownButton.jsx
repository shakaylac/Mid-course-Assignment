
function DropdownButton() {

    

    return(
        <div className="d-flex flex-column">
        <p>Select data point to filter search by</p>
        <div class="input-group">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Model</a></li>
              <li><a class="dropdown-item" href="#">Gender</a></li>
              <li><a class="dropdown-item" href="#">Operating System</a></li>
              <li><a class="dropdown-item" href="#">Behavior Class</a></li>
          </ul>
          </div>
        </div>
    )
}

export default DropdownButton;