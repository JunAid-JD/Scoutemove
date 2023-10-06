import React, { useState } from "react";
import "./Profile.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import {
  AddCircleOutlined,
  CalendarMonth,
  DeleteOutline,
  EditCalendarOutlined,
  EditOutlined,
  RemoveCircle,
  RemoveCircleOutlined,
} from "@mui/icons-material";

const Mobile = () => {
  const [manageBlog, setManageBlog] = useState(true);
  const [manageBlogBtn, setManageBlogBtn] = useState(true);
  const [manageOrder, setManageOrder] = useState(false);
  const [manageOrderBtn, setManageOrderBtn] = useState(false);
  return (
    <div className="manageblogs manageblogsMobile">
      <button className={`${manageBlogBtn ? "active" : ""}`}>
        <h5 className={`${manageOrderBtn ? "red" : "green"}`}>Manage Blogs</h5>
        {manageBlogBtn ? (
          <RemoveCircle
            className="red"
            onClick={() => {
              setManageBlogBtn(false);
              setManageBlog(false);
            }}
          />
        ) : (
          <AddCircleOutlined
            className="green"
            onClick={() => {
              setManageBlogBtn(true);
              setManageBlog(true);
            }}
          />
        )}
      </button>

      <div className="articleSlider ">
        {manageBlog && (
          <div className="sliderSection articlesliderSection">
            <ScrollingCarousel>
              <div className="sliderCards">
                <div className="sliderCard">
                  <img src="/img/sliderimg4.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
                <div className="sliderCard">
                  <img src="/img/sliderimg4.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
                <div className="sliderCard">
                  <img src="/img/sliderimg4.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
              </div>
            </ScrollingCarousel>
            <div className="sliderBtns">
              <div className="viewmorebtn">View More</div>
            </div>
          </div>
        )}
        <button className={`${manageOrderBtn ? "active" : ""}`}>
          <h5 className={`${manageOrderBtn ? "red" : "green"}`}>
            Manage Order
          </h5>
          {manageOrderBtn ? (
            <RemoveCircle
              className="red"
              onClick={() => {
                setManageOrderBtn(false);
                setManageOrder(false);
              }}
            />
          ) : (
            <AddCircleOutlined
              className="green"
              onClick={() => {
                setManageOrderBtn(true);
                setManageOrder(true);
              }}
            />
          )}
        </button>
        {manageOrder && (
          <div className="sliderSection articlesliderSection">
            <ScrollingCarousel>
              <div className="sliderCards">
                <div className="sliderCard">
                  <img src="/img/sliderimg1.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
                <div className="sliderCard">
                  <img src="/img/sliderimg2.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
                <div className="sliderCard">
                  <img src="/img/sliderimg3.png" alt="bg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget
                    duis quam leo nec.
                  </p>
                </div>
              </div>
            </ScrollingCarousel>
            <div className="sliderBtns">
              <div className="viewmorebtn">View More</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
