import React from "react";
import "./TrendingArticle.css";
import Card from "./Card";
import { Link } from "react-router-dom";

const TrendingArticle = () => {
  return (
    <div className="trendingArticle p-5">
      <div className="title">
        <h1>Top Trending articles</h1>
      </div>
      <div className="cards">
        <Card
          title="How to start your journey?"
          image="/img/trendingarticleimg1.png"
        />

        <Card
          title="10 tips for new traveller!"
          image="/img/trendingarticleimg2.png"
        />
        <Card
          title="Make money while travelling! "
          image="/img/trendingarticleimg3.png"
        />
      </div>
      <div className="btn">
        <Link to="/blogs">
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingArticle;
