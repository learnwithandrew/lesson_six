import React from "react";
import "./AddPizzaForm.css";

function AddPizzaForm() {
  return (
    <div className="addPizzaform-container">
      <form>
        <input type="text" placeholder="Enter Pizza Name" />
        <select>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default AddPizzaForm;
