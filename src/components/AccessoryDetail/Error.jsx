import React from "react";
import "./Sucess.css";
import { BorderColor, Cancel, CheckCircle, Close } from "@mui/icons-material";

const Error = ({ setPlaceOrder, setCheckout }) => {
  return (
    <div className="accessoryDetail">
      <div className="accessorySection SucessSection">
        <div className="detail">
          <div
            className="svg"
            style={{ background: "red", BorderColor: "#F6BDBD" }}
          >
            <Close />
          </div>
          <h3>Cancel</h3>
          <p>Scoutemove, unsuccessfully completed</p>
        </div>
        <div className="submit">
          <button className="cancel" onClick={() => setCheckout(false)}>
            Cancel
          </button>
          <button className="error" onClick={() => setPlaceOrder(false)}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
