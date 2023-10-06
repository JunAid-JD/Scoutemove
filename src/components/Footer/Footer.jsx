import {
  FacebookOutlined,
  Instagram,
  MailOutlined,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <footer className="p-5">
        <div className="content">
          <div className="section">
            <div className="footerlogo">
              <img src="/img/footerlogo.png" alt="bg" />
            </div>
            <div className="searchbox">
              <div className="search">
                <MailOutlined />
                <input type="email" placeholder="You Email" />
              </div>
              <button>Subscribe</button>
            </div>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className="section">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div className="section">
            <h3>Contact</h3>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </div>
          <div className="section">
            <h3>More</h3>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
          <div className="section">
            <div className="icons">
              <IconButton className="iconbg">
                {" "}
                <FacebookOutlined />
              </IconButton>
              <IconButton className="iconbg">
                {" "}
                <Instagram />
              </IconButton>
              <IconButton className="iconbg">
                {" "}
                <Twitter />
              </IconButton>
            </div>
            <p>Discover our app</p>
            <div className="store">
              <img src="/img/GooglePlay.png" alt="bg" />
              <img src="/img/AppleStore.png" alt="bg" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>All rights Scoute@move.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
