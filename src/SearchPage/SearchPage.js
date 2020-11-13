import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "../SearchResult/SearchResult";
import { search_results } from "../SearchResult/searchResults_data";

function SearchPage() {
  const buttons_data = [
    "Cancellation Flexibility",
    "Type of place",
    "Price",
    "Rooms and beds",
    "More filters"
  ];
  const display_buttons = buttons_data.map((button, index) => (
    <Button variant="outlined" key={index}>
      {button}
    </Button>
  ));

  const display_searchResults = search_results.map((result, index) => (
    <SearchResult
      key={index}
      img={result.img}
      location={result.location}
      title={result.title}
      description={result.description}
      star={result.star}
      price={result.price}
      total={result.total}
    />
  ));
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays 26 august to 30 august 2 guest</p>
        <h1>Stays nearby</h1>
        {display_buttons}
      </div>
      {display_searchResults}
    </div>
  );
}

export default SearchPage;
