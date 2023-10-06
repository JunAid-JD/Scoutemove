import {
  AddCircleOutlined,
  CalendarMonth,
  DeleteOutline,
  EditCalendarOutlined,
  EditOutlined,
  RemoveCircle,
  RemoveCircleOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import Left from "./Left";
import Right from "./Right";
import ManageBlog from "./ManageBlog";
import Mobile from "./Mobile";

const Profile = () => {
  const [showSecondSection, setShowSecondSection] = useState(true);
  const [showThirdSection, setShowThirdSection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSecondSection(false);
        setShowThirdSection(false);
      } else {
        setShowSecondSection(true);
        setShowThirdSection(true);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen width on component mount
    handleResize();

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  // const toggleSecondSection = () => {
  //   setShowSecondSection(!showSecondSection);
  //   setShowThirdSection(false);
  // };

  // const toggleThirdSection = (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   setShowThirdSection(!showThirdSection);
  //   // setShowSecondSection(false); // Close the second section
  // };

  return (
    <div className="profile">
      <div className="profileSection">
        <Left />

        <Right />
      </div>

      <ManageBlog />
      <Mobile />
    </div>
  );
};

export default Profile;
