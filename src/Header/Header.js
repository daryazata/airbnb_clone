import React from "react";
import "./Header.css";
import { Search, Language, ExpandMore } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="http://tous-logos.com/wp-content/uploads/2018/02/Airbnb-Logo.png"
        />
      </Link>

      <div className="header__searchbar">
        <input type="text" />
        <Search />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
