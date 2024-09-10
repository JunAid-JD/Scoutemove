import React, { useState } from "react";
import "./Detail.css";

const Right = () => {
  const [sizeActive, setSizeActive] = useState("s");

  const handleSizeActive = (value) => {
    setSizeActive(value);
  };
  return (
    <div className="right">
      <h1>Embrace nature's grace, leave a green trace. </h1>
      {/* size */}
      <div className="size">
        <h5>
          Size <a href="">Size chart</a>
        </h5>
        <div className="sizes">
          <span
            className={`${sizeActive === "s" ? "sizeActive" : ""}`}
            onClick={() => {
              handleSizeActive("s");
            }}
          >
            S
          </span>
          <span
            className={`${sizeActive === "m" ? "sizeActive" : ""}`}
            onClick={() => {
              handleSizeActive("m");
            }}
          >
            M
          </span>
          <span
            className={`${sizeActive === "l" ? "sizeActive" : ""}`}
            onClick={() => {
              handleSizeActive("l");
            }}
          >
            L
          </span>
          <span
            className={`${sizeActive === "xl" ? "sizeActive" : ""}`}
            onClick={() => {
              handleSizeActive("xl");
            }}
          >
            XL
          </span>
        </div>
      </div>

      <div className="content">
        <ul>
          <li>
            3-in-1 design with onboard crevice tool allows you to customize your
            vacuum for your needs. At only 4 pounds, you can take the Eureka
            blaze anywhere
          </li>
          <li>
            Eureka's signature swivels steering improves maneuverability and
            cleaning efficiency when compared to standard stick vacuums
          </li>
        </ul>
      </div>

      <div className="checkout">
        <div className="price">
          <h5>Price :</h5>
          <p className="priceimg">
            <img src="/img/blogsdetailaccordian.png" alt="bg" /> 1234
          </p>
        </div>
        <button>Continue To checkout</button>
      </div>
    </div>
  );
};

export default Right;
