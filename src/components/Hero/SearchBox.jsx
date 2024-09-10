import React, { useState } from "react";
// import "./Blogs.css";
import Dropbox from "./Dropbox";
import { Search } from "@mui/icons-material";

const SearchBox = ({ id }) => {
  const [box, setBox] = useState(false);

  return (
    <div className="searchbox" id={id}>
      <div className="search">
        <Search />
        <input type="text" placeholder="Search Blogs" />
        <img src="/img/settingicon.png" alt="bg" onClick={() => setBox(!box)} />
        {box && (
          <div className="dropbox">
            <Dropbox />
            <Dropbox />
            <Dropbox />
            <Dropbox />
            <Dropbox />
          </div>
        )}
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
