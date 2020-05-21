import React from "react";
import "./style.css";
import manReading from "../../assets/manReading.svg";

function Jumbotron() {
  return (
    <div className="jumbotron uk-text-right" uk-height-viewport="expand: true">
      <div>
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </div>
      <img src={manReading} alt="Man reading" />
    </div>
  );
}

export default Jumbotron;
