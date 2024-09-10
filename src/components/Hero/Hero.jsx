import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./Hero.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import SearchBox from "./SearchBox";

const Hero = () => {
  const [select, setSelect] = useState("first");
  const [heading, setHeading] = useState("Delhi");
  const [temp, setTemp] = useState("28º");
  const [imgicon, setImgicon] = useState("/img/herosun.png");

  const handleHeading = (value) => {
    setHeading(value);
  };

  const handleTemp = (value) => {
    setTemp(value);
  };

  // const handleIcon = (value) => {
  //   setImgicon(value);
  // };

  const handlebox = (value) => {
    setSelect(value);
  };
  return (
    <div className="heroSection p-5">
      <div className="left">
        <p>Explore Beautiful Places</p>
        <h1>
          Dare to live <span>the life</span> you've always <b>wanted</b>.
        </h1>
        <p>
          Travelling leaves you speechless, then turns you into a storyteller.
          Join others in telling the story don’t listen to it.
        </p>
        {/* <div className="searchbox"> */}
        {/* <div className="search">
            <Search />
            <input type="text" placeholder="Search Blogs,Articles" />
          </div>
          <button>Search</button> */}
        <SearchBox />
        {/* </div> */}
      </div>
      {/* <div className="right">
        <div className="temperatureSection">
          <div className="left">
            <div className="vector">
              <h3>{heading}</h3>
              <img src="/img/herosun.png" alt="logo" />
              <button>{heading}</button>
            </div>
            <h1>-{temp}</h1>
          </div>
          <div className="right">
            <p>Precipitation: 7% </p>
            <p>Humidity: 54% </p>
            <p>Wind: 5 mph</p>
          </div>
        </div>
        <div className="tempboxsec">
          <ScrollingCarousel>
            <div className="temperatureBoxes">
              <div
                className={`temperaturebox ${
                  select === "first" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("first");
                  handleHeading("Delhi");
                  handleTemp("28º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Delhi</p>
                <h1>28º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${select === "two" ? "darkbg" : ""}`}
                onClick={() => {
                  handlebox("two");
                  handleHeading("Mumbai");
                  handleTemp("18º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Mumbai</p>
                <h1>18º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${
                  select === "three" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("three");
                  handleHeading("Chennai");
                  handleTemp("28º");
                  // handleIcon("/img/sunicon.png");
                }}
              >
                <p>Chennai</p>
                <h1>28º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>

              <div
                className={`temperaturebox ${
                  select === "four" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("four");
                  handleHeading("Pemba");
                  handleTemp("28º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>pemba</p>
                <h1>28º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${
                  select === "five" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("five");
                  handleHeading("Bangalore");
                  handleTemp("24º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Bangalore</p>
                <h1>24º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${select === "six" ? "darkbg" : ""}`}
                onClick={() => {
                  handlebox("six");
                  handleHeading("Harvana");
                  handleTemp("22º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Harvana</p>
                <h1>22º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${
                  select === "seven" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("seven");
                  handleHeading("Dubai");
                  handleTemp("32º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Dubai</p>
                <h1>32º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
              <div
                className={`temperaturebox ${
                  select === "eight" ? "darkbg" : ""
                }`}
                onClick={() => {
                  handlebox("eight");
                  handleHeading("Qatar");
                  handleTemp("42º");
                  // handleIcon("/img/herosun.png");
                }}
              >
                <p>Qatar</p>
                <h1>42º</h1>
                <img src="/img/sunicon.png" alt="logo" />
              </div>
            </div>
          </ScrollingCarousel>
        </div>
      </div> */}
      {/* <div className="searchbox "> */}
      <SearchBox id="searchboxonmobile" />
      {/* <div className="search">
          <Search />
          <input type="text" placeholder="Search Blogs,Articles" />
        </div>
        <button>Search</button> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
