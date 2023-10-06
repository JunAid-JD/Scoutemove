import React, { useState } from "react";
import "./ExperienceDetail.css";
import { FileUploadOutlined } from "@mui/icons-material";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  // Function to handle image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageSelect2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage2(imageUrl);
    }
  };
  return (
    <div className="upload">
      <div className="upload-thumbnail">
        <div className="thumbnail">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageSelect}
          />
          <FileUploadOutlined
            onClick={() => document.getElementById("imageInput").click()}
          />
          <h3>Upload Thumbnail </h3>
        </div>
        <div className="thumnailimg">
          <img
            src={`${
              selectedImage === null ? "/img/blogimg.png" : selectedImage
            }`}
            alt="bg"
          />
          <p>Image size must not cross 194H x 416W</p>
        </div>
      </div>
      <div className="upload-blog-image">
        <div className="thumbnail">
          <input
            type="file"
            id="imageInput2"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageSelect2}
          />
          <FileUploadOutlined
            onClick={() => document.getElementById("imageInput2").click()}
          />
          <h3>Upload Blog image </h3>
        </div>
        <div className="thumnailimg">
          <img
            src={`${
              selectedImage2 === null
                ? "/img/blogsdetailbg.png"
                : selectedImage2
            }`}
            alt="bg"
          />
          <p>Image size must not cross 194H x 416W</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
