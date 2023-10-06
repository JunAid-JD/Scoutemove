import React, { useState } from "react";
// import {
//   CheckBox,
//   CheckBoxOutlined,
//   DeleteOutline,
//   ModeEditOutlined,
//   Search,
// } from "@mui/icons-material";

import "./Blogs.css";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import SearchBox from "./SearchBox";

const Blogs = () => {
  // const [box, setBox] = useState(false);
  return (
    <div className="blogs p-5">
      <SearchBox />

      <h3>Adventure</h3>
      <div className="blogcards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      {/* second */}

      <h3>Weekend tour</h3>
      <div className="blogcards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
