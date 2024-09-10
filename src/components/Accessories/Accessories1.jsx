import React, { useEffect, useState } from "react";
import "./Accessories1.css";
import Card from "./Card";
import AccessoryDetail from "../AccessoryDetail/AccessoryDetail";
import SelectAddress from "../AccessoryDetail/SelectAddress";
import AddAddress from "../AccessoryDetail/AddAddress";
import OrderDetail from "../AccessoryDetail/OrderDetail";
import Sucess from "../AccessoryDetail/Sucess";
import Error from "../AccessoryDetail/Error";
import AccessoryDetailGraphics from "../AccessoryDetail/AccessoryDetailGraphics";

const items = [
  {
    image: "/img/accessory1.png",
    title: "T Shirt",
  },
  {
    image: "/img/accessory2.png",
    title: "Hoddie",
  },
  {
    image: "/img/accessory3.png",
    title: "Water Bottle",
  },
  {
    image: "/img/accessory4.png",
    title: "SweatShirt",
  },
  {
    image: "/img/accessory5.png",
    title: "OverSize Shirt",
  },
  {
    image: "/img/accessory4.png",
    title: "SweatShirt",
  },
];

const Accessories1 = () => {
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [graphics, setGraphics] = useState(false);
  const [selectAddress, SetSelectAddress] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [orderDetail, setOrderDetail] = useState(false);

  // Add or remove the class to disable scrolling
  useEffect(() => {
    if (open) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    // Cleanup by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [open]);

  return (
    <div className="accessories">
      <h3>Select your accessory</h3>
      <main>
        {items.map((item) => (
          <Card image={item.image} title={item.title} setOpen={setOpen} />
        ))}
      </main>
      {open ? (
        orderDetail ? (
          <OrderDetail setOrderDetail={setOrderDetail} setOpen={setOpen} />
        ) : placeOrder ? (
          <Sucess setOrderDetail={setOrderDetail} />
        ) : // <Error setPlaceOrder={setPlaceOrder} setCheckout={setCheckout} />
        selectAddress ? (
          <AddAddress
            setPlaceOrder={setPlaceOrder}
            SetSelectAddress={SetSelectAddress}
            setOpen={setOpen}
          />
        ) : checkout ? (
          <SelectAddress
            SetSelectAddress={SetSelectAddress}
            setCheckout={setCheckout}
            setPlaceOrder={setPlaceOrder}
            setOpen={setOpen}
          />
        ) : graphics ? (
          <AccessoryDetailGraphics
            setOpen={setOpen}
            setCheckout={setCheckout}
            setGraphics={setGraphics}
          />
        ) : (
          <AccessoryDetail setOpen={setOpen} setGraphics={setGraphics} />
        )
      ) : null}
      {/* {open ? <SelectAddress /> : null} */}
      {/* {open ? <AddAddress /> : null} */}
      {/* {open ? <OrderDetail /> : null} */}
      {/* {open ? <Sucess /> : null} */}
      {/* {open ? <Error /> : null} */}
    </div>
  );
};

export default Accessories1;
