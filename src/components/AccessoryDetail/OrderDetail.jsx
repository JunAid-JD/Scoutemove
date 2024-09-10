import React from "react";
import "./OrderDetail.css";
import { CheckCircle, Clear } from "@mui/icons-material";

const OrderDetail = ({ setOpen }) => {
  return (
    <div className="accessoryDetail">
      <div className="accessorySection orderDetailSection">
        <div className="title">
          <h3>Order Detail </h3>
          <Clear className="close" onClick={() => setOpen(false)} />
        </div>
        <div className="orderdetail">
          <div className="detail">
            <h1>Visited Places (Add places using comma)</h1>
            <div className="detailbox">
              <div className="item">
                <p>Size: </p>
                <p>Colour:</p>
                <p>Accessory:</p>
                <p>ScouteCoin used:</p>
              </div>
              <div className="spec">
                <p>L</p>
                <p>Black</p>
                <p>Hoodie</p>
                <p>
                  <img src="img/blogsdetailaccordian.png" alt="bg" />
                  1234
                </p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="img/accessory1.png" alt="bg" />
          </div>
        </div>

        <div className="orderStatus">
          <div className="progres">
            <CheckCircle style={{ color: "#DE1D3E" }} />
            <span className="line"></span>
            <div className="dot"></div>
            <span className="line"></span>
            <div className="dot"></div>
            <span className="line inactiveline"></span>
            <CheckCircle style={{ color: "#D9D9D9" }} />
          </div>
          <div className="detail">
            <h3>Order Confirm,Aug 31</h3>
            <div className="box">
              <h5>Shiping details</h5>
              <p>Visited Places (Add places using comma)</p>
              <p>Visited Places (Add places using comma)</p>
              <p>Visited Places (Add places using comma)</p>
            </div>
            <h3>Delivery Complete</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
