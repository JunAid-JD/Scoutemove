import React from "react";
import "./Store.css";
import { Link } from "react-router-dom";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="bg" />
      <p>{title}</p>
      <div className="detail">
        <p className="score">
          <img src="/img/blogsdetailaccordian.png" alt="bg" />
          1234
        </p>
        <Link to="/storeDetail">
          <button>View and Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
