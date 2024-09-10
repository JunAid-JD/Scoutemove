import React from "react";
import "./HomeBlog.css";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <div className="homeblog p-5">
      <div className="image">
        <img src="/img/blogsdetailbg.png" alt="bg" />
      </div>
      <div className="title">
        <h1>Ishtiaq Ali</h1>
        <p>World class traveler</p>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          tempor nam dignissim neque, ullamcorper facilisis nulla hendrerit
          sagittis. Molestie placerat justo integer vitae elementum lectus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Dignissim tempor
          nam dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Dignissim tempor nam
          dignissim neque, ullamcorper facilisis nulla hendrerit sagittis.
          Molestie placerat justo integer vitae elementum lectus.
        </p>
      </div>
      <div className="readmore">
        <Link to="/blogsDetail">
          <button>Read more</button>
        </Link>
        <ArrowRightAlt />
      </div>
    </div>
  );
};

export default HomeBlog;
