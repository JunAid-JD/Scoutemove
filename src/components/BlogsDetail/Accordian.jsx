import React, { useState } from "react";
import "./BlogsDetail.css";
import { AddCircleSharp, RemoveCircleSharp } from "@mui/icons-material";

const Accordian = ({ heading, para, number, img }) => {
  const [accordian, setAccordian] = useState(false);
  const [text, setText] = useState(para); // Initial text

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
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
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
