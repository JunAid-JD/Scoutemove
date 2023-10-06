import React from "react";
import "./Profile.css";
import { EditOutlined } from "@mui/icons-material";

const Profileinfo = () => {
  return (
    <div className="profileinfo">
      <div className="firstLast">
        <div>
          <label htmlFor="">First Name</label>
          <div className="inputfield">
            <input type="text" placeholder="Alex" />
            <EditOutlined />
          </div>
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <div className="inputfield">
            <input type="text" placeholder="Hales" />
            <EditOutlined />
          </div>
        </div>
      </div>

      <div className="firstLast">
        <div>
          <label htmlFor="">Contact Number</label>
          <div className="inputfield">
            <input type="text" placeholder="+994****456789" />
            <EditOutlined />
          </div>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <select name="" id="">
            <option value=""></option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
          {/* <input type="text" placeholder="Hales" /> */}
        </div>
      </div>
      {/* <label htmlFor="">Contact Number</label>
      <div className="inputfield">
        <input type="text" placeholder="+994****456789" />
        <EditOutlined />
      </div> */}
      <label htmlFor="">Date of birth</label>
      <div className="inputfield">
        <input type="date" placeholder="12/6/1993" />
        {/* <CalendarMonth /> */}
      </div>
    </div>
  );
};

export default Profileinfo;
