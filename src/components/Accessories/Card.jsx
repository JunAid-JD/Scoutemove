import React from "react";
import "./Accessories1.css";

const Card = ({ image, title, setOpen }) => {
  return (
    <div className="card" onClick={() => setOpen(true)}>
      <img src={image} alt="bg" />
      <span className="layer"></span>
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
