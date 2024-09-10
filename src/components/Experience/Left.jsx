import React from "react";
import "./ExperienceDetail.css";
import { CreateOutlined } from "@mui/icons-material";

const Left = () => {
  return (
    <div className="left">
      <h4>Share Your Experience</h4>
      <form action="">
        <label htmlFor="">
          Category<span className="red">*</span>
        </label>
        <select name="" id="" placeholder="weekend tour">
          <option value="">Weekend Tour</option>
          <option value="">Monday Tour</option>
          <option value="">Year Tour</option>
        </select>
        <label htmlFor="">
          Visited Places<span className="red">*</span> (Add places using comma)
        </label>
        <div className="input">
          <input type="text" placeholder="Simla, kulu, manali" />
          <CreateOutlined />
        </div>

        <label htmlFor="">
          Trip Duration<span className="red">*</span> (in days)
        </label>
        <div className="input">
          <input type="text" placeholder="3" />
          <CreateOutlined />
        </div>

        <label htmlFor="">
          Budget<span className="red">*</span>
        </label>
        <div className="input">
          <input type="text" placeholder="₹300" />
          <CreateOutlined />
        </div>

        <label htmlFor="">
          Headline<span className="red">*</span>
        </label>
        <div className="input">
          <input type="text" placeholder="This is blog headlinev" />
          <CreateOutlined />
        </div>
      </form>
    </div>
  );
};

export default Left;
