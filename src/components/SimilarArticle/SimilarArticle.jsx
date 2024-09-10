import React from "react";
import "./SimilarArticle.css";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SimilarArticle = () => {
  return (
    <div className="similarArticle p-5">
      <div className="title">
        <h1>Similar Articles</h1>
      </div>

      {/* first */}
      <div className="content">
        <div className="contentimg">
          <img src="/img/similarArticleimg.png" alt="bg" />
        </div>
        <div className="contentdetail">
          <h2>Plan an Excellent Family Travel Adventure</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nunc
            purus id facilisi cursus risus egestas orci. Quis rhoncus nulla erat
            interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dolor nunc purus id facilisi cursus risus egestas orci. Quis rhoncus
            nulla erat interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.
          </p>
          <Link to="/blogsDetail">
            <button>
              <a href="#">Read more</a>
              <ArrowRightAlt />
            </button>
          </Link>
        </div>
      </div>

      {/* second */}
      <div className="content">
        <div className="contentdetail" id="article2">
          <h2>Plan an Excellent Family Travel Adventure</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nunc
            purus id facilisi cursus risus egestas orci. Quis rhoncus nulla erat
            interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dolor nunc purus id facilisi cursus risus egestas orci. Quis rhoncus
            nulla erat interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.
          </p>
          <Link to="/blogsDetail">
            <button>
              <a href="#">Read more</a>
              <ArrowRightAlt />
            </button>
          </Link>
        </div>
        <div className="contentimg">
          <img src="/img/similarArticleimg.png" alt="bg" />
        </div>
      </div>

      {/* third */}
      <div className="content">
        <div className="contentimg">
          <img src="/img/similarArticleimg.png" alt="bg" />
        </div>
        <div className="contentdetail">
          <h2>Plan an Excellent Family Travel Adventure</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nunc
            purus id facilisi cursus risus egestas orci. Quis rhoncus nulla erat
            interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dolor nunc purus id facilisi cursus risus egestas orci. Quis rhoncus
            nulla erat interdum adipiscing. scelerisque interdum tristique arcu
            scelerisque.
          </p>
          <Link to="/blogsDetail">
            <button>
              <a href="#">Read more</a>
              <ArrowRightAlt />
            </button>
          </Link>
        </div>
      </div>

      <div className="btn">
        <Link to="/blogs">
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
};

export default SimilarArticle;
