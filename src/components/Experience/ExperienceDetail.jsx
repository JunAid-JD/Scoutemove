import React, { useState } from "react";
import "./ExperienceDetail.css";
// import { Calendar } from "@/components/ui/calendar";
import { CreateOutlined, FileUploadOutlined } from "@mui/icons-material";
// import { Calender } from "./Calender";

import Left from "./Left";
import Right from "./Right";
import Detailbox from "./Detailbox";
import Upload from "./Upload";

const ExperienceDetail = () => {
  // const [date, setDate] = (React.useState < Date) | (undefined > new Date());

  return (
    <div className="experienceDetail">
      <div className="detail">
        <Left />
        <Right />
      </div>

      <Detailbox />

      <Upload />
      <div className="publish">
        <button>Publish</button>
      </div>
    </div>
  );
};

export default ExperienceDetail;
