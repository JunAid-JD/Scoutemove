import React, { useState } from "react";
import "./Detail.css";
// import {
//   AddCircleOutlined,
//   Bookmark,
//   RemoveCircleOutlined,
//   TurnedInNotOutlined,
// } from "@mui/icons-material";
import Left from "./Left";
import Right from "./Right";

const StoreDetail = () => {
  // const [showSecondSection, setShowSecondSection] = useState(true);
  // const [showThirdSection, setShowThirdSection] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setShowSecondSection(false);
  //       setShowThirdSection(false);
  //     } else {
  //       setShowSecondSection(true);
  //       setShowThirdSection(true);
  //     }
  //   };

  // Add event listener to handle window resize
  // window.addEventListener("resize", handleResize);

  // Initial check for screen width on component mount
  // handleResize();

  // // Clean up the event listener on component unmount
  // return () => {
  //   window.removeEventListener("resize", handleResize);
  // };
  // }, []);

  // const toggleSecondSection = () => {
  //   setShowSecondSection(!showSecondSection);
  // };

  // const toggleThirdSection = (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   setShowThirdSection(!showThirdSection);
  //   setShowSecondSection(false); // Close the second section
  // };

  return (
    <div className="storedetail">
      <Left />
      <Right />
    </div>
  );
};

export default StoreDetail;
