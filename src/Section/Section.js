import React from "react";
import Card from "../Card/Card";
import "./Section.css";

function Section({ data }) {
  const display_cards = data.map((data, index) => (
    <Card
      key={index}
      src={data.src}
      title={data.title}
      description={data.description}
      price={data.price}
    />
  ));
  return <div className="section">{display_cards}</div>;
}

export default Section;
