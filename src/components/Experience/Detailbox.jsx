import React from "react";
import "./ExperienceDetail.css";
import { CreateOutlined } from "@mui/icons-material";

const Detailbox = () => {
  return (
    <div className="detailbox">
      <label htmlFor="Description">
        Description<span className="red">*</span>
      </label>
      <div className="input">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Add a Description"
        ></textarea>
        <CreateOutlined />
      </div>
    </div>
  );
};

export default Detailbox;
