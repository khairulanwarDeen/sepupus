import React from "react";
import SimpleCard from "./cardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Look at these posts!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <SimpleCard children="yo" />
            <SimpleCard />
            <SimpleCard />
          </ul>
          <ul className="cards__items">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
