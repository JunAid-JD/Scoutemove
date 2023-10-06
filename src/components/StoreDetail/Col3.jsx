import React, { useState } from "react";
import "./StoreDetail.css";
import {
  AddCircleOutlined,
  Bookmark,
  RemoveCircleOutlined,
  TurnedInNotOutlined,
} from "@mui/icons-material";

const Col3 = ({ toggleSecondSection }) => {
  const [isOpen, setIsOpen] = useState("");

  const toggleAccordion = (value) => {
    setIsOpen(value);
  };
  return (
    <div className="col3">
      <div className="saveaddress">
        <h5>Saved Address</h5>
        <Bookmark className="redsvg" />
      </div>
      <div className="savedaddresscards">
        <div className={`card ${isOpen === "one" ? "bgActive" : ""}`}>
          <div className="cardheader">
            <h5 className={`${isOpen !== "one" ? "orange" : ""}`}>
              Floyd miles
            </h5>
            {isOpen === "one" ? (
              <RemoveCircleOutlined
                className={`${isOpen !== "one" ? "orange" : "redsvg"}`}
                onClick={() => {
                  toggleAccordion("");
                }}
              />
            ) : (
              <AddCircleOutlined
                className={`${isOpen !== "one" ? "orange" : ""}`}
                onClick={() => {
                  toggleAccordion("one");
                }}
              />
            )}
          </div>
          <div className={`cardbody ${isOpen === "one" ? "showCardBody" : ""}`}>
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
              Buy at : <img src="/img/blogsdetailaccordian.png" alt="bg" />
              1234
            </button>
          </div>
        </div>

        <div className={`card ${isOpen === "two" ? "bgActive" : ""}`}>
          <div className="cardheader">
            <h5 className={`${isOpen !== "two" ? "orange" : ""}`}>
              Floyd miles
            </h5>
            {isOpen === "two" ? (
              <RemoveCircleOutlined
                className={`${isOpen !== "two" ? "orange" : "redsvg"}`}
                onClick={() => {
                  toggleAccordion("");
                }}
              />
            ) : (
              <AddCircleOutlined
                className={`${isOpen !== "two" ? "orange" : ""}`}
                onClick={() => {
                  toggleAccordion("two");
                }}
              />
            )}
          </div>
          <div className={`cardbody ${isOpen === "two" ? "showCardBody" : ""}`}>
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
              Buy at : <img src="/img/blogsdetailaccordian.png" alt="bg" />
              1234
            </button>
          </div>
        </div>

        <div className={`card ${isOpen === "three" ? "bgActive" : ""}`}>
          <div className="cardheader">
            <h5 className={`${isOpen !== "three" ? "orange" : ""}`}>
              Floyd miles
            </h5>
            {isOpen === "three" ? (
              <RemoveCircleOutlined
                className={`${isOpen !== "three" ? "orange" : "redsvg"}`}
                onClick={() => {
                  toggleAccordion("");
                }}
              />
            ) : (
              <AddCircleOutlined
                className={`${isOpen !== "three" ? "orange" : ""}`}
                onClick={() => {
                  toggleAccordion("three");
                }}
              />
            )}
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
            <button>
              Buy at : <img src="/img/blogsdetailaccordian.png" alt="bg" />
              1234
            </button>
          </div>
        </div>

        <div className={`card ${isOpen === "four" ? "bgActive" : ""}`}>
          <div className="cardheader">
            <h5 className={`${isOpen !== "four" ? "orange" : ""}`}>
              Floyd miles
            </h5>
            {isOpen === "four" ? (
              <RemoveCircleOutlined
                className={`${isOpen !== "four" ? "orange" : "redsvg"}`}
                onClick={() => {
                  toggleAccordion("");
                }}
              />
            ) : (
              <AddCircleOutlined
                className={`${isOpen !== "four" ? "orange" : ""}`}
                onClick={() => {
                  toggleAccordion("four");
                }}
              />
            )}
          </div>
          <div
            className={`cardbody ${isOpen === "four" ? "showCardBody" : ""}`}
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
            <button>
              Buy at : <img src="/img/blogsdetailaccordian.png" alt="bg" />
              1234
            </button>
          </div>
        </div>
      </div>
      <div className="colHandlerBtn">
        <button onClick={toggleSecondSection}>Add a new address</button>
      </div>
    </div>
  );
};

export default Col3;
