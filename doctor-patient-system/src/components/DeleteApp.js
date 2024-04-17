import React from "react";
import { Dropdown, Button} from "react-bootstrap";
import "./DeleteApp.css";

function DeleteApp() {
  return (
    <div class="appdd">
      <Dropdown class="appdd">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <br />
      <div class="button2">
        <Button variant="success">
            <a id="but2" class="text-white" href="/Search">Go Back to Dashboard</a></Button>
      </div>
    </div>
  );
}

export default DeleteApp;
