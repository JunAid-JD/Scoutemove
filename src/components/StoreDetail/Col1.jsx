import React, { useState } from "react";
import "./StoreDetail.css";

const Col1 = ({ toggleThirdSection }) => {
  const [sizeActive, setSizeActive] = useState("s");

  const handleSizeActive = (value) => {
    setSizeActive(value);
  };
  return (
    <div className="col1">
      <div className="detailimg">
        <img src="/img/storedetailbg.png" alt="bg" />
      </div>
      <div className="productname">
        <h1>Product Name</h1>
        <div className="smimg">
          <img src="/img/storedetailsm1.png" alt="bg" />
          <img src="/img/storedetailsm2.png" alt="bg" />
        </div>
      </div>
      <div className="productdetail">
        <div className="sizeprice">
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
          <div className="price">
            <h5>Price :</h5>
            <p className="priceimg">
              <img src="/img/blogsdetailaccordian.png" alt="bg" /> 1234
            </p>
          </div>
        </div>
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
      <div className="colHandlerBtn">
        <button onClick={toggleThirdSection}>Continue to checkout</button>
      </div>
    </div>
  );
};

export default Col1;
