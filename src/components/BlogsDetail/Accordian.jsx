import React, { useState } from "react";
import "./BlogsDetail.css";
import { AddCircleSharp, RemoveCircleSharp } from "@mui/icons-material";

const Accordian = ({ heading, para, number, img }) => {
  const [accordian, setAccordian] = useState(false);
  const [text, setText] = useState(
    "TanahAir offers a service for creating a website design,  illustration, icon set"
  ); // Initial text

  const handleTextChange = (e) => {
    setText(e.target.innerText);
  };
  return (
    <div className="accordion">
      <div className="accordion-header">
        <h3>{heading}</h3>
        {!accordian && (
          <AddCircleSharp className="gold" onClick={() => setAccordian(true)} />
        )}
        {accordian && (
          <RemoveCircleSharp
            className="red"
            onClick={() => setAccordian(false)}
          />
        )}
      </div>

      {accordian && (
        <div className="accordion-content">
          <p
            contentEditable
            onBlur={handleTextChange}
            onInput={handleTextChange}
            style={{ outline: "none" }}
          >
            {text}
          </p>
          <div className="count">
            <p>
              <img src={img} alt="bg" /> {number}
            </p>
            <button>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
