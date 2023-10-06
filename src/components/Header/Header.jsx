import React, { useEffect, useState } from "react";
import "./Header.css";
import { Cancel, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showWalletButton, setShowWalletButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState("home");

  const handleNav = (value) => {
    setNav(value);
  };

  useEffect(() => {
    // Use the location.pathname or any other condition to determine when to show "Wallet".
    const shouldShowWalletButton = location.pathname !== "/";
    setShowWalletButton(shouldShowWalletButton);
  }, [location]);

  return (
    <>
      <header className="p-5">
        <div className="left">
          <div
            className="logo"
            onClick={() => {
              setNav("home");
              setOpen(false);
            }}
          >
            <Link to="/">
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <nav className={`${open ? "block" : ""}`}>
            <ul>
              <li
                className={`${nav === "home" ? "active" : ""}`}
                onClick={() => {
                  setNav("home");
                  setOpen(false);
                }}
              >
                <Link to="/">
                  <a href="home">Home</a>
                </Link>
              </li>
              <li
                className={`${nav === "profile" ? "active" : ""}`}
                onClick={() => {
                  setNav("profile");
                  setOpen(false);
                }}
              >
                <Link to="/profile">
                  <a href="#profile">Profile</a>
                </Link>
              </li>
              <li
                className={`${nav === "policy" ? "active" : ""}`}
                onClick={() => {
                  setNav("policy");
                  setOpen(false);
                }}
              >
                <a href="#policy">Privacy Policy</a>
              </li>
              <li
                className={`${nav === "store" ? "active" : ""}`}
                onClick={() => {
                  setNav("store");
                  setOpen(false);
                }}
              >
                <Link to="/store">
                  <a href="#store">Store</a>
                </Link>
              </li>
              <Cancel className="cancelbtn" onClick={() => setOpen(false)} />
            </ul>
          </nav>
        </div>
        <div className={`right ${open ? "flex" : ""}`}>
          {/* {!showWalletButton ? ( */}
          <Link to="/login">
            <a href="#Login" className="login">
              Login
            </a>
          </Link>
          {/* ) : (
            <img src="/img/walletimg.png" alt="bg" />
          )} */}
          {/* {!showWalletButton ? ( */}
          <Link to="/signup">
            <div className="signup">Signup</div>
          </Link>
          {/* ) : (
            <img src="/img/modeimg.png" alt="bg" />
          )} */}
        </div>
        <Menu className="menubtn" onClick={() => setOpen(true)} />
      </header>
    </>
  );
};

export default Header;
