import React, { useState } from "react";
import "./AccessoryDetail.css";
import {
  Check,
  Clear,
  FileUploadOutlined,
  PanoramaFishEye,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const AccessoryDetail = ({ setOpen, setGraphics }) => {
  const [color, setColor] = useState("green");
  const [size, setSize] = useState("sm");
  const [gender, setGender] = useState("male");

  // const [itemImage, setItemImage] = useState("img/shirt3.png");

  const handleColor = (color) => {
    setColor(color);
  };

  const handleSize = (size) => {
    setSize(size);
  };

  const handleGender = (gender) => {
    setGender(gender);
  };

  // const [selectedImage, setSelectedImage] = useState(null);

  // // Function to handle image selection
  // const handleImageSelect = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setSelectedImage(imageUrl);
  //   }
  // };

  return (
    <div className="accessoryDetail">
      <div className="accessorySection">
        <div className="title">
          <h3>Customize</h3>
          <Clear className="close" onClick={() => setOpen(false)} />
        </div>
        <div className="colors">
          <h5>Choose a Color</h5>
          <div className="colorbox">
            <div
              className={`border ${color === "orange" ? "borderorange" : ""}`}
            >
              <div
                className="color orange"
                onClick={() => handleColor("orange")}
              >
                {color === "orange" && <Check />}
              </div>
            </div>
            <div className={`border ${color === "green" ? "bordergreen" : ""}`}>
              <div className="color green" onClick={() => handleColor("green")}>
                {color === "green" && <Check />}
              </div>
            </div>
            <div className={`border ${color === "blue" ? "borderblue" : ""}`}>
              <div className="color blue" onClick={() => handleColor("blue")}>
                {color === "blue" && <Check />}
              </div>
            </div>
            <div className={`border ${color === "pink" ? "borderpink" : ""}`}>
              <div className="color pink" onClick={() => handleColor("pink")}>
                {color === "pink" && <Check />}
              </div>
            </div>
            <div className={`border ${color === "grey" ? "bordergrey" : ""}`}>
              <div className="color grey" onClick={() => handleColor("grey")}>
                {color === "grey" && <Check />}
              </div>
            </div>
          </div>
        </div>

        <div className="sizes">
          <h5>Choose a Size</h5>
          <div className="sizeboxs">
            <div
              className={`box ${size === "sm" ? "sizeactive" : ""}`}
              onClick={() => handleSize("sm")}
            >
              {size === "sm" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}

              <p>Small</p>
            </div>
            <div
              className={`box ${size === "m" ? "sizeactive" : ""}`}
              onClick={() => handleSize("m")}
            >
              {size === "m" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>Medium</p>
            </div>
            <div
              className={`box ${size === "l" ? "sizeactive" : ""}`}
              onClick={() => handleSize("l")}
            >
              {size === "l" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>Large</p>
            </div>
            <div
              className={`box ${size === "xl" ? "sizeactive" : ""}`}
              onClick={() => handleSize("xl")}
            >
              {size === "xl" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>XL</p>
            </div>
            <div
              className={`box ${size === "xxl" ? "sizeactive" : ""}`}
              onClick={() => handleSize("xxl")}
            >
              {size === "xxl" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>XXL</p>
            </div>
          </div>
        </div>

        <div className="sizes">
          <h5>Choose Gender</h5>
          <div className="sizeboxs">
            <div
              className={`box ${gender === "male" ? "sizeactive" : ""}`}
              onClick={() => handleGender("male")}
            >
              {gender === "male" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>Male</p>
            </div>
            <div
              className={`box ${gender === "female" ? "sizeactive" : ""}`}
              onClick={() => handleGender("female")}
            >
              {gender === "female" ? (
                <RadioButtonCheckedOutlined style={{ color: "#FFFFFF" }} />
              ) : (
                <PanoramaFishEye style={{ color: "#726C6C" }} />
              )}
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={() => setGraphics(true)}>Save & Continue</button>
        </div>

        {/* <div className="clothes">
          <h5>Select your graphics</h5>
          <ScrollingCarousel>
            <div className="clothbox">
              <div
                className="box"
                onClick={() => setItemImage("img/shirt1.png")}
              >
                <img src="img/shirt1.png" alt="bg" />
              </div>
              <div
                className="box"
                onClick={() => setItemImage("img/shirt2.png")}
              >
                <img src="img/shirt2.png" alt="bg" />
              </div>
              <div
                className="box "
                onClick={() => setItemImage("img/shirt3.png")}
              >
                <img src="img/shirt3.png" alt="bg" />
              </div>
              <div
                className="box"
                onClick={() => setItemImage("img/shirt1.png")}
              >
                <img src="img/shirt1.png" alt="bg" />
              </div>
              <div
                className="box"
                onClick={() => setItemImage("img/shirt2.png")}
              >
                <img src="img/shirt2.png" alt="bg" />
              </div>
              <div
                className="box "
                onClick={() => setItemImage("img/shirt3.png")}
              >
                <img src="img/shirt3.png" alt="bg" />
              </div>
              <div className="box" onClick={() => setItemImage(selectedImage)}>
                {selectedImage && (
                  <>
                    <img src={selectedImage} alt="bg" />
                  </>
                )}
                {selectedImage === null && (
                  <>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageSelect}
                    />
                    <FileUploadOutlined
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                    />
                    <p>Upload Your own graphics</p>
                  </>
                )}
              </div>
            </div>
          </ScrollingCarousel>
        </div>

        <div className="totalbox">
          <div className="totalitem">
            <img src={itemImage} alt="" />
          </div>
          <div className="totaldetail">
            <div className="itemList">
              <div className="item">
                <h3>Accessory cost</h3>
                <div className="price">
                  <img src="img/blogsdetailaccordian.png" alt="bg" />
                  <p>1234</p>
                </div>
              </div>
              <div className="item">
                <h3>Printing Cost</h3>
                <div className="price">
                  <img src="img/blogsdetailaccordian.png" alt="bg" />
                  <p>1234</p>
                </div>
              </div>
              <div className="item">
                <h3>Delivery</h3>
                <div className="price">
                  <img src="img/blogsdetailaccordian.png" alt="bg" />
                  <p>1234</p>
                </div>
              </div>
            </div>
            <div className="itemTotal">
              <div className="totalbtn">
                <h3>Total cost</h3>
                <div className="totalprice">
                  <img src="img/blogsdetailaccordian.png" alt="bg" />
                  <p>1234</p>
                </div>
              </div>
              <button onClick={() => setCheckout(true)}>
                Continue To checkout
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AccessoryDetail;
