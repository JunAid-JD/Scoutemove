import React, { useState } from "react";
import "./AccessoryDetail.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { ArrowBackIos, Clear, FileUploadOutlined } from "@mui/icons-material";

const AccessoryDetailGraphics = ({ setGraphics, setCheckout, setOpen }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemImage, setItemImage] = useState("img/shirt3.png");

  // Function to handle image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div className="accessoryDetail">
      <div className="accessorySection">
        <div className="title">
          <div className="back" onClick={() => setGraphics(false)}>
            <ArrowBackIos /> <p>Back</p>
          </div>
          <Clear className="close" onClick={() => setOpen(false)} />
        </div>
        <div className="clothes">
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
        </div>
      </div>
    </div>
  );
};

export default AccessoryDetailGraphics;
