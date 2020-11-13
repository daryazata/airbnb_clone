import React from "react";
import "./SearchResult.css";
import { Star, FavoriteBorder } from "@material-ui/icons";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return (
    <div className="searchResult">
      .
      <img src={img} alt={title} />
      <div className="searchResult__description">
        <div className="searchResult__location">
          <p>{location}</p>
          <FavoriteBorder style={{ color: "black" }} />
        </div>
        <p className="searchResult__title">{title}</p>
        <p>____</p>
        <p>{description}</p>
        <div className="searchResult__price">
          <h4>{price}</h4>
        </div>
        <div className="searchResult__start__total">
          <div className="searchResult__star">
            <Star style={{ color: "red", alignSelf: "flex-start" }} />
            <h4>{star}</h4>
          </div>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
