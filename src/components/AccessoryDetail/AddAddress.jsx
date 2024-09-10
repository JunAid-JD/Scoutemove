import { ArrowBackIos, Clear } from "@mui/icons-material";
import React from "react";
import "./AddAddress.css";

const AddAddress = ({ setOpen, SetSelectAddress, setPlaceOrder }) => {
  return (
    <div className="accessoryDetail">
      <div className="accessorySection addAddressSection">
        <div className="title">
          <div className="back" onClick={() => SetSelectAddress(false)}>
            <ArrowBackIos /> <p>Back</p>
          </div>
          <h3>Add Address</h3>
          <Clear className="close" onClick={() => setOpen(false)} />
        </div>
        <div className="form">
          <div className="block">
            <label htmlFor="">Address Name*</label>
            <input type="text" placeholder="Home Address" />
          </div>
          <div className="block">
            <label htmlFor="">Address line 1*</label>
            <input type="text" placeholder="House Number/Apartment Number" />
          </div>
          <div className="block">
            <label htmlFor="">Address line 2*</label>
            <input type="text" placeholder="Street Name" />
          </div>

          <div className="block">
            <label htmlFor="">Landmark</label>
            <input type="text" placeholder="Nearest popular place" />
          </div>
          <div className="block">
            <label htmlFor="">Country*</label>
            <select name="" id="">
              <option value="" disabled selected>
                Select country
              </option>
              <option value="">Pakistan</option>
              <option value="">Dubai</option>
              <option value="">UAE</option>
            </select>
          </div>

          <div className="block">
            <label htmlFor="">State*</label>
            <select name="" id="">
              <option value="" disabled selected>
                Select state
              </option>
              <option value="">Pakistan</option>
              <option value="">Dubai</option>
              <option value="">UAE</option>
            </select>
          </div>

          <div className="block">
            <label htmlFor="">District*</label>
            <select name="" id="">
              <option value="" disabled selected>
                Select district
              </option>
              <option value="">Pakistan</option>
              <option value="">Dubai</option>
              <option value="">UAE</option>
            </select>
          </div>

          <div className="block">
            <label htmlFor="">Pin Code*</label>
            <input type="text" placeholder="23563" />
          </div>

          <div className="block">
            <label htmlFor="">Post Office*</label>
            <select name="" id="">
              <option value="" disabled selected>
                Select Post Office
              </option>
              <option value="">Pakistan</option>
              <option value="">Dubai</option>
              <option value="">UAE</option>
            </select>
          </div>
        </div>
        <button onClick={() => setPlaceOrder(true)}>Add Address</button>
      </div>
    </div>
  );
};

export default AddAddress;
