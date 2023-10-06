import React, { useState } from "react";
import "./Blogs.css";
import { CheckBox, CheckBoxOutlined } from "@mui/icons-material";

const Dropbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="category">
      <p>By categories </p>
      {checked ? (
        <CheckBox onClick={() => setChecked(!checked)} />
      ) : (
        <CheckBoxOutlined onClick={() => setChecked(!checked)} />
      )}
    </div>
  );
};

export default Dropbox;
