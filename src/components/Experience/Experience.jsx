import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Experience.css";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Start sharing your recent experience.</h2>
      <form action="">
        <label htmlFor="">Country</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
        </select>

        <label htmlFor="">Region</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
        </select>

        <label htmlFor="">States</label>
        <div className="box">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Rawalpindi" />
            <FormControlLabel control={<Checkbox />} label="Lahore" />
            <FormControlLabel control={<Checkbox />} label="Islamabaad" />
            <FormControlLabel control={<Checkbox />} label="Faisalabad" />
          </FormGroup>
        </div>

        <label htmlFor="">States Region</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
        </select>

        <label htmlFor="">Districts</label>
        <div className="box">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Rawalpindi" />
            <FormControlLabel control={<Checkbox />} label="Lahore" />
            <FormControlLabel control={<Checkbox />} label="Islamabaad" />
            <FormControlLabel control={<Checkbox />} label="Faisalabad" />
          </FormGroup>
        </div>

        <label htmlFor="">Pincodes</label>
        <div className="box">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="2344635" />
            <FormControlLabel control={<Checkbox />} label="435435" />
            <FormControlLabel control={<Checkbox />} label="23424" />
            <FormControlLabel control={<Checkbox />} label="342332" />
          </FormGroup>
        </div>
      </form>
      <Link to="/experienceDetail">
        <button>Save & Continue</button>
      </Link>
    </div>
  );
};

export default Experience;
