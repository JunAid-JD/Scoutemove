import React, { useState } from "react";
import "./Profile.css";

import {
  AddCircleOutlined,
  CalendarMonth,
  DeleteOutline,
  EditCalendarOutlined,
  EditOutlined,
  RemoveCircle,
  RemoveCircleOutlined,
} from "@mui/icons-material";

const Right = () => {
  const [isOpen, setIsOpen] = useState("one");
  const [manageAddress, setManageAddress] = useState(true);

  const toggleAccordion = (value) => {
    setIsOpen(value);
  };
  return (
    <div className="right">
      <div className="manageAddress">
        <h5> Manage Address</h5>
        {manageAddress ? (
          <RemoveCircle
            className="red"
            onClick={() => setManageAddress(false)}
          />
        ) : (
          <AddCircleOutlined
            className="red"
            onClick={() => setManageAddress(true)}
          />
        )}
      </div>
      {manageAddress && (
        <div className="savedaddresscards">
          <div className={`card ${isOpen === "one" ? "bgActive" : ""}`}>
            <div className="cardheader">
              <h5 className={`${isOpen !== "one" ? "orange" : ""}`}>
                Home Address
              </h5>
              <div className="icons">
                <DeleteOutline />
                {isOpen === "one" ? (
                  <RemoveCircleOutlined
                    className={`${isOpen !== "one" ? "green" : "red"}`}
                    onClick={() => {
                      toggleAccordion("");
                    }}
                  />
                ) : (
                  <AddCircleOutlined
                    className={`${isOpen !== "one" ? "green" : ""}`}
                    onClick={() => {
                      toggleAccordion("one");
                    }}
                  />
                )}
              </div>
            </div>
            <div
              className={`cardbody ${isOpen === "one" ? "showCardBody" : ""}`}
            >
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
            </div>
          </div>
          <div className={`card ${isOpen === "two" ? "bgActive" : ""}`}>
            <div className="cardheader">
              <h5 className={`${isOpen !== "two" ? "orange" : ""}`}>
                Home Address
              </h5>
              <div className="icons">
                <DeleteOutline />
                {isOpen === "two" ? (
                  <RemoveCircleOutlined
                    className={`${isOpen !== "two" ? "green" : "red"}`}
                    onClick={() => {
                      toggleAccordion("");
                    }}
                  />
                ) : (
                  <AddCircleOutlined
                    className={`${isOpen !== "two" ? "green" : ""}`}
                    onClick={() => {
                      toggleAccordion("two");
                    }}
                  />
                )}
              </div>
            </div>
            <div
              className={`cardbody ${isOpen === "two" ? "showCardBody" : ""}`}
            >
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
            </div>
          </div>
          <div className={`card ${isOpen === "three" ? "bgActive" : ""}`}>
            <div className="cardheader">
              <h5 className={`${isOpen !== "three" ? "orange" : ""}`}>
                Home Address
              </h5>
              <div className="icons">
                <DeleteOutline />
                {isOpen === "three" ? (
                  <RemoveCircleOutlined
                    className={`${isOpen !== "three" ? "green" : "red"}`}
                    onClick={() => {
                      toggleAccordion("");
                    }}
                  />
                ) : (
                  <AddCircleOutlined
                    className={`${isOpen !== "three" ? "green" : ""}`}
                    onClick={() => {
                      toggleAccordion("three");
                    }}
                  />
                )}
              </div>
            </div>
            <div
              className={`cardbody ${isOpen === "three" ? "showCardBody" : ""}`}
            >
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
            </div>
          </div>
          <button>+ Add address</button>
        </div>
      )}
    </div>
  );
};

export default Right;
