import React from "react";
import "./StoreDetail.css";

const Col2 = () => {
  return (
    <div className="col2">
      <form>
        <h3>Address Details</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius
          rem vero autem numquam laborum.
        </p>

        <label htmlFor="">Address Name</label>
        <input type="text" className="addressName" placeholder="Delhi" />
        <label htmlFor="">Address Line 1</label>
        <input type="text" />
        <label htmlFor="">Address Line 2</label>
        <input type="text" />
        <label htmlFor="">Landmark</label>
        <input type="text" />

        <label htmlFor="">Country</label>
        <select>
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>
        <label htmlFor="">State</label>
        <select>
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>
        <label htmlFor="">District</label>
        <select>
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>
        <label htmlFor="">Pin Code</label>
        <input type="text" />
        <label htmlFor="">Post Office</label>
        <select>
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>
      </form>
      <div className="formbtn">
        <button>Save & continue</button>
      </div>
    </div>
  );
};

export default Col2;
