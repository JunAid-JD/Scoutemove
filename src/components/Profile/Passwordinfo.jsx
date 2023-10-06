import React, { useState } from "react";
import "./Profile.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Passwordinfo = () => {
  // State to track password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="passwordinfo">
      <label htmlFor="">Old Password</label>
      <div className="inputfield">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle input type
          placeholder="*********"
        />
        {passwordVisible ? (
          <VisibilityOff onClick={togglePasswordVisibility} />
        ) : (
          <Visibility onClick={togglePasswordVisibility} />
        )}
      </div>

      <label htmlFor="">New Password</label>
      <div className="inputfield">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle input type
          placeholder="*********"
        />
        {passwordVisible ? (
          <VisibilityOff onClick={togglePasswordVisibility} />
        ) : (
          <Visibility onClick={togglePasswordVisibility} />
        )}
      </div>

      <label htmlFor="">Confirm Password</label>
      <div className="inputfield">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle input type
          placeholder="*********"
        />
        {passwordVisible ? (
          <VisibilityOff onClick={togglePasswordVisibility} />
        ) : (
          <Visibility onClick={togglePasswordVisibility} />
        )}
      </div>
    </div>
  );
};

export default Passwordinfo;
