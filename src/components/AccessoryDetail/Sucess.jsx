import React from "react";
import "./Sucess.css";
import { CheckCircle, CheckOutlined } from "@mui/icons-material";

const Sucess = ({ setOrderDetail }) => {
  return (
    <div className="accessoryDetail">
      <div className="accessorySection SucessSection">
        <div className="detail">
          <div className="svg">
            <CheckOutlined />
          </div>
          <h3>Success</h3>
          <p>Scoutemove, successfully completed</p>
        </div>
        <div className="submit">
          <button onClick={() => setOrderDetail(true)}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
