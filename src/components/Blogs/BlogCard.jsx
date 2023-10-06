import React from "react";
import "./Blogs.css";
import { DeleteOutline, ModeEditOutlined, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="blogcard">
      <div className="author">
        <div className="authorimg">
          <img src="/img/blogauthor.png" alt="bg" />
          <span>Ishtiaq Ali</span>
        </div>
        <div className="icon">
          <ModeEditOutlined />
          <DeleteOutline />
        </div>
      </div>
      <div className="blogimg">
        <img src="/img/blogimg.png" alt="bg" />
        <img src="/img/hearticon.png" alt="bg" />
      </div>
      <div className="blogtext">
        Lorem ipsum dolor siametconsectetur. Nec vestibulum eget duis quam leo
        nec.
        <Link to="/blogsDetail">View more</Link>
      </div>
    </div>
  );
};

export default BlogCard;
