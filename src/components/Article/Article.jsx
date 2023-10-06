import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import Reuse from "./Reuse";

const Article = () => {
  return (
    <div className="articleSection p-5">
      <h1>Articles</h1>
      <h5>Recently added articles</h5>
      <div className="articlebody">
        <div className="left">
          <Link to="/blogsDetail">
            <article>
              <img src="/img/articleimg1.png" alt="logo" />
              <h5>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
                quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
                vestibulum eget duis quam leo nec. Lorem ipsum dolor sit amet
                consectetur. Nec vestibulum eget duis quam leo nec. Lorem ipsum
                dolor sit amet consectetur. Nec vestibulum eget duis quam leo
                nec. Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                duis quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec
                vestibulum eget duis quam leo nec. <a href="#">See more</a>
              </p>
            </article>
          </Link>
        </div>
        <div className="right">
          <Reuse />
          <Reuse />
          <Reuse />
        </div>
      </div>
      <Link to="/blogs">
        <div className="viewmorebtn ">View More</div>
      </Link>
    </div>
  );
};

export default Article;
