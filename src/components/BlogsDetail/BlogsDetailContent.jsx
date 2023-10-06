import React from "react";
import "./BlogsDetail.css";
import {
  ShareOutlined,
  ThumbDownOffAlt,
  ThumbUpAlt,
} from "@mui/icons-material";

const BlogsDetailContent = () => {
  return (
    <div className="blogsdetailcontent">
      <button>Nature</button>
      <h1>
        Embrace nature's grace, leave a green trace. Preserve nature's allure,
      </h1>
      <div className="reactions">
        <p className="date">August 20, 2022</p>
        <div className="icons">
          <ThumbUpAlt />

          <ThumbDownOffAlt className="down" />

          <ShareOutlined className="share" />
        </div>
      </div>
      <div className="image">
        <img src="/img/blogsdetailbg.png" alt="bg" />
      </div>
      <p className="details">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
    </div>
  );
};

export default BlogsDetailContent;
