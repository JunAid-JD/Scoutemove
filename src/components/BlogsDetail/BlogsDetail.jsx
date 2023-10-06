import React, { useState } from "react";
import "./BlogsDetail.css";
// import {
//   ShareOutlined,
//   ThumbDownOffAlt,
//   ThumbUpAlt,
// } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
import Accordian from "./Accordian";
import BlogsDetailHeader from "./BlogsDetailHeader";
import BlogsDetailContent from "./BlogsDetailContent";
import Summary from "./Summary";
import QuestionAnswer from "./QuestionAnswer";

const BlogsDetail = () => {
  const [isOpen, setIsOpen] = useState(1);
  const [close, setClose] = useState(true);

  const toggleAccordion = (value) => {
    setIsOpen(value);
  };
  return (
    <div className="blogsdetail">
      <BlogsDetailHeader />

      <BlogsDetailContent />

      <div className="adds">
        <img src="/img/addimg.png" alt="adds" />
      </div>

      <div className="blogsdetailaccordian">
        <p className="accordiancontent">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <Summary />
        <div className="accordiansection">
          <Accordian
            heading="What services does TanahAir Offer?"
            para="TanahAir offers a service for creating a website design,
            illustration, icon set,"
            number="1234"
            img="/img/blogsdetailaccordian.png"
          />
          <Accordian
            heading="What services does TanahAir Offer?"
            para="TanahAir offers a service for creating a website design,
            illustration, icon set,"
            number="1234"
            img="/img/blogsdetailaccordian.png"
          />
          <Accordian
            heading="What services does TanahAir Offer?"
            para="TanahAir offers a service for creating a website design,
            illustration, icon set,"
            number="1234"
            img="/img/blogsdetailaccordian.png"
          />
          <Accordian
            heading="What services does TanahAir Offer?"
            para="TanahAir offers a service for creating a website design,
            illustration, icon set,"
            number="1234"
            img="/img/blogsdetailaccordian.png"
          />
        </div>
        <QuestionAnswer />
      </div>
    </div>
  );
};

export default BlogsDetail;
