import React, { useState } from "react";
import "./StoreDetail.css";
import {
  AddCircleOutlined,
  RemoveCircleOutlined,
  TurnedInNotOutlined,
} from "@mui/icons-material";

const Card = ({ index }) => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [isOpen, setIsOpen] = useState("");

  const toggleAccordion = (value) => {
    setIsOpen(value);
  };

  return (
    <div className={`card ${active ? "bgActive" : ""}`}>
      <div className="cardheader">
        <h5>Floyd miles</h5>
        {toggle ? (
          <RemoveCircleOutlined
            className="redsvg"
            onClick={() => {
              setToggle(false);
              setActive(false);
              toggleAccordion("");
            }}
          />
        ) : (
          <AddCircleOutlined
            onClick={() => {
              setToggle(true);
              setActive(true);
              toggleAccordion(index);
            }}
          />
        )}
      </div>
      {active ? (
        <div className={`cardbody ${isOpen === index ? "showCardBody" : ""}`}>
          <div className="content">
            <h5>Address line 1</h5>
            <p>Rawalpindi,Islamabad,Pakistan</p>
            <h5>Address line 1</h5>
            <p>Rawalpindi,Islamabad,Pakistan</p>
            <h5>State</h5>
            <p>Islamabad</p>
            <h5>Pin Code</h5>
            <p>12345</p>
          </div>
          <button>
            Buy at : <img src="/img/blogsdetailaccordian.png" alt="bg" /> 1234
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
