import React, { useEffect, useState } from "react";
import "./StoreDetail.css";
import {
  AddCircleOutlined,
  Bookmark,
  RemoveCircleOutlined,
  TurnedInNotOutlined,
} from "@mui/icons-material";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
// import Card from "./Card";

const StoreDetail = () => {
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

  const toggleSecondSection = () => {
    setShowSecondSection(!showSecondSection);
  };

  const toggleThirdSection = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowThirdSection(!showThirdSection);
    setShowSecondSection(false); // Close the second section
  };

  return (
    <div className="storedetail">
      <Col1 toggleThirdSection={toggleThirdSection} />

      {/* Second Section */}
      {showSecondSection && <Col2 />}
      {/* Button to toggle the Third Section */}
      {/* {showSecondSection && showThirdSection === false && ( */}
      {/* <div className="colHandlerBtn">
        <button onClick={toggleThirdSection}>Continue to checkout</button>
      </div> */}
      {/* )} */}

      {/* Third Section */}
      {showThirdSection && (
        <>
          <Col3 toggleSecondSection={toggleSecondSection} />
          {/* Button to toggle the Second Section */}
          {/* {showSecondSection === false && ( */}
          {/* <div className="colHandlerBtn">
            <button onClick={toggleSecondSection}>Add a new address</button>
          </div> */}
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default StoreDetail;
