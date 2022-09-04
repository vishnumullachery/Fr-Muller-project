import React from "react";
import Hospital_logo from "./1979.png";
import NABH_logo from "./nabh-full-accredited-certification-500x500.jpg";
import "./search.css";

const Search = () => {
  return (
    <div>
      <div className="navbar">
        <img className="hospital_logo" src={"Hospital_logo"} alt="pic" />
        <p>
          FATHER MULLER MEDICAL COLLEGE HOSPITAL <br />
          DEPARTMENT OF ONCOLOGY <br />
          Patient record
        </p>
        <img className="nabh_logo" src={"NABH_logo"} alt="pic" />
      </div>
    </div>
  );
};

export default Search;
