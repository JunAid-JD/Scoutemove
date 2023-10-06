import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Profileinfo from "./Profileinfo";
import Passwordinfo from "./Passwordinfo";
import { EditCalendarOutlined } from "@mui/icons-material";

const Left = () => {
  const [info, setInfo] = useState(true);

  const [color, setColor] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div className="left">
      <div className="profileInfo">
        <div className="header">
          <h5>Profile info</h5>
          <Link to="/experience">
            <button>Create a blog +</button>
          </Link>
        </div>
        <div className="user">
          <div className="userimg">
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageSelect}
            />
            <img
              src={`${
                selectedImage === null ? "/img/profileUser.png" : selectedImage
              }`}
              alt="bg"
            />
            <img
              src="/img/profileCamera.png"
              alt="bg"
              onClick={() => document.getElementById("imageInput").click()}
            />
          </div>
          <h5>Koushik Saha"</h5>
        </div>
        <div className="end">
          <div className="score">
            <p>Total scout coin earned :</p>
            <div className="coin">
              <img src="/img/blogsdetailaccordian.png" alt="bg" /> 1234
            </div>
          </div>
          <div className="EditForget">
            <p
              className={`${color === "edit" ? "green" : ""}`}
              onClick={() => {
                setColor("edit");
                setInfo(true);
              }}
            >
              EditProfile <EditCalendarOutlined />
            </p>
            <p
              className={`${color === "forget" ? "green" : ""}`}
              onClick={() => {
                setColor("forget");
                setInfo(false);
              }}
            >
              Forget password?
            </p>
          </div>
        </div>
      </div>
      <div className="profileForm">
        <input type="email" disabled placeholder="Aliishtiaq@gmail.com" />
        {info ? <Profileinfo /> : <Passwordinfo />}
        <div className="button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Left;
