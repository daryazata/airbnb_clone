import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Datepicker from "../Datepicker/Datepicker";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {!showSearch ? `Search Dates` : `Hide`}
        </Button>
        {showSearch && <Datepicker />}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a diffrent kind of gataway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
