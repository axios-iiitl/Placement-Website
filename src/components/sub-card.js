import React from "react";
import { subjects } from "./semlist";
const SubCard = props => (
  <ul className="cards">
    <li className="cards__item">
      <div className="card">
        <div className="card__content">
          <div className="card__title">
            <p className="sem">{props.sem}</p>
          </div>
          <ul className="sub">
            {subjects[props.ind].map(val => (
              <li>{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  </ul>
);

export default SubCard;
