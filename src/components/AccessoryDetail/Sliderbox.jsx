import React, { useState } from "react";
import "./SelectAddress.css";
import { CheckBox, CheckBoxOutlineBlankOutlined } from "@mui/icons-material";

const Sliderbox = ({ check, setCheck }) => {
  return (
    <div className="sliderbox">
      <div className="head">
        <h4>Floyd miles</h4>
        {!check ? (
          <CheckBox onClick={() => setCheck(!check)} />
        ) : (
          <CheckBoxOutlineBlankOutlined onClick={() => setCheck(!check)} />
        )}
      </div>
      <div className="detail">
        <h5>Address line 1</h5>
        <p>8540,Dehli Preston RD, Mine 2324</p>

        <h5>Address line 2</h5>
        <p>8540,Dehli Preston RD, Mine 2324</p>

        <h5>State</h5>
        <p>Pindi</p>

        <h5>Pin Code</h5>
        <p>234455</p>
      </div>
    </div>
  );
};

export default Sliderbox;
