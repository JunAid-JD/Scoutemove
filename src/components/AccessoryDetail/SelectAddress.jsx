import React, { useState } from "react";
import "./SelectAddress.css";
import {
  AddBox,
  ArrowBackIos,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
  Clear,
} from "@mui/icons-material";
import Sliderbox from "./Sliderbox";
import Sliderbox2 from "./Sliderbox2";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const SelectAddress = ({
  setCheckout,
  SetSelectAddress,
  setPlaceOrder,
  setOpen,
}) => {
  const [curent, setCurent] = useState(1);
  const [check, setCheck] = useState(false);

  const forward = (prev) => {
    if (prev === 4) {
      setCurent(1);
    }
    setCurent(prev + 1);
  };

  const backward = (prev) => {
    if (prev === 1) {
      setCurent(4);
    }
    setCurent(prev - 1);
  };

  return (
    <div className="selectAddress">
      <div className="accessoryDetail">
        <div className="accessorySection selectAddressSection">
          <div className="title">
            <div className="back" onClick={() => setCheckout(false)}>
              <ArrowBackIos /> <p>Back</p>
            </div>
            <h3>Select Address</h3>
            <Clear className="close" onClick={() => setOpen(false)} />
          </div>
          <div className="slider">
            <ArrowCircleLeftOutlined style={{ color: "#999999" }} />
            <ScrollingCarousel>
              {curent === 1 && (
                <div className="slides">
                  <Sliderbox check={check} setCheck={setCheck} />
                  <Sliderbox2 check={check} setCheck={setCheck} />
                </div>
              )}
              {curent === 2 && (
                <div className="slides">
                  <Sliderbox status={true} />
                  <Sliderbox status={false} />
                </div>
              )}
              {curent === 3 && (
                <div className="slides">
                  <Sliderbox status={true} />
                  <Sliderbox status={false} />
                </div>
              )}
              {curent === 4 && (
                <div className="slides">
                  <Sliderbox status={true} />
                  <Sliderbox status={false} />
                </div>
              )}
            </ScrollingCarousel>
            <ArrowCircleRightOutlined style={{ color: "#DE1D3E" }} />
          </div>
          <div className="addressDetail">
            <div
              className="addnewaddress"
              onClick={() => SetSelectAddress(true)}
            >
              <AddBox />
              <h4>Add a new address</h4>
            </div>
            <div className="orderdetail">
              <div className="total">
                <h5>Order Total</h5>
                <div className="price">
                  <img src="/img/blogsdetailaccordian.png" alt="bg" />
                  <p>1234</p>
                </div>
              </div>
              <button onClick={() => setPlaceOrder(true)}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
