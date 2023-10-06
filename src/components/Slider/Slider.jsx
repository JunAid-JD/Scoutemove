import React, { useState } from "react";
import "./Slider.css";
import {
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const Slider = () => {
  const [active, setActive] = useState("one");
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("Michael Yon");

  const handleActive = (value) => {
    setActive(value);
  };

  // Your button click handler
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Render your buttons
  const buttons = [
    "Michael Yon",
    "Long War Journal",
    "Army of Dude",
    "Stripes - Military News",
    "Kaboom War Journal",
    "Policy Journal",
    "Politics",
    "Economics",
    "Trade",
    "Stocks",
  ];
  return (
    <div className="sliderSection p-5">
      <ScrollingCarousel>
        <div className="sliderHeader">
          {buttons.map((buttonName) => (
            <button
              key={buttonName}
              className={activeButton === buttonName ? "active" : ""}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </ScrollingCarousel>

      {activeButton === "Michael Yon" && (
        <>
          {active === "one" && (
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

          {active === "two" && (
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
        </>
      )}
      {activeButton !== "Michael Yon" && (
        <>
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
        </>
      )}
      {/* {index === 2 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 3 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 4 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 5 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 6 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 7 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 8 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )}
      {index === 9 && (
        <>
          {active === "one" && (
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
          )}

          {active === "two" && (
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
          )}
        </>
      )} */}

      <div className="sliderBtns">
        <div className="left">
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
        </div>
      </div>
    </div>
  );
};

export default Slider;
