import React from "react";
import "./MoreArticle.css";
import { Link } from "react-router-dom";

const Reuse = () => {
  return (
    <Link to="/blogsDetail">
      <article>
        <img src="/img/articleimg3.png" alt="logo" />
        <div className="content">
          <h5>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
            quam leo nec.
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget duis
            quam leo nec. Lorem ipsum dolor sit amet consectetur. Nec vestibulum
            eget duis quam leo nec. Lorem ipsum dolor sit amet.
            <a href="#">See more</a>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Reuse;
