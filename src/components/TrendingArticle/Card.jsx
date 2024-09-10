import React from "react";
import "./TrendingArticle.css";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="bg1" />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut sed
          egestas imperdiet hac mi nunc neque. Congue rutrum arcu, consectetur
          molestie ornare justo.
        </p>
        <Link to="/blogsDetail">
          <button>
            <a href="#">Read more</a>
            <ArrowRightAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
