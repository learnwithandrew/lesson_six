import React from "react";
import "./PizzaListItem.css";
import PizzaItem from "./PizzaItem";
import { pizzaData } from "../Data";

function PizzaListItem() {
  return (
    <div className="pizzalist-container">
      <PizzaItem props={pizzaData} />
    </div>
  );
}

export default PizzaListItem;
