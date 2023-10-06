import React, { useState } from "react";

import {
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import "./ArticleSlider.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const ArticleSlider = () => {
  const [active, setActive] = useState("one");
  // const [index, setIndex] = useState(0);
  // const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  const handleActive = (value) => {
    setActive(value);
  };

  // const handlefirst = () => {
  //   if (index === 0) {
  //     setIndex(1);
  //   } else {
  //     setIndex((prevState) => prevState - 1);
  //   }
  // };

  // const handlelast = () => {
  //   if (index === 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex((prevState) => prevState + 1);
  //   }
  // };

  // const handleClick = (newIndex) => {
  //   if (newIndex === index) {
  //     return; // If the selected box is already active, do nothing
  //   }

  //   if (newIndex === lastSelectedIndex) {
  //     setIndex(lastSelectedIndex + 1); // Move the last selected box to the second place after the active box
  //     setLastSelectedIndex(newIndex);
  //   } else {
  //     setIndex(newIndex); // Set the index of the newly selected box
  //     setLastSelectedIndex(index);
  //   }
  // };

  return (
    <div className="articleSlider p-5">
      <h5>Similar articles</h5>
      <div className="sliderSection articlesliderSection">
        {active === "two" && (
          <ScrollingCarousel>
            <div className="sliderCards">
              <div className="sliderCard">
                <img src="/img/sliderimg1.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
              <div className="sliderCard">
                <img src="/img/sliderimg2.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
              <div className="sliderCard">
                <img src="/img/sliderimg3.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
            </div>
          </ScrollingCarousel>
        )}
        {active === "one" && (
          <ScrollingCarousel>
            <div className="sliderCards">
              <div className="sliderCard">
                <img src="/img/sliderimg4.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
              <div className="sliderCard">
                <img src="/img/sliderimg4.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
              <div className="sliderCard">
                <img src="/img/sliderimg4.png" alt="bg" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                  duis quam leo nec.
                </p>
              </div>
            </div>
          </ScrollingCarousel>
        )}
        <div className="sliderBtns">
          <div className="viewmorebtn">View More</div>
          {/* <div className="left">
            <div className="btns">
              <span
                className={`${active === "one" ? "active" : ""}`}
                onClick={() => {
                  // handlelast();
                  handleActive("one");
                }}
              ></span>
              <span
                className={`${active === "two" ? "active" : ""}`}
                onClick={() => {
                  // handlefirst();
                  handleActive("two");
                }}
              ></span>
            </div>
            <p>View all</p>
          </div>
          <div className="right">
            <div
              className={`button ${active === "one" ? "active" : ""}`}
              onClick={() => {
                // handlelast();
                handleActive("one");
              }}
            >
              <ArrowBackIosNew />
            </div>
            <div
              className={`button ${active === "two" ? "active" : ""}`}
              onClick={() => {
                // handlefirst();
                handleActive("two");
              }}
            >
              <ArrowForwardIos />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleSlider;
