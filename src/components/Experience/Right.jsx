import React from "react";
import "./ExperienceDetail.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Right = () => {
  return (
    <div className="right">
      <div className="box">
        <h3>Date Of Journey</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Right;
