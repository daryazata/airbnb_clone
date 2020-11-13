//rfce
import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Section from "../Section/Section";
import { cards_homes, cards_intro } from "../Section/data/section_data";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Banner />

      <Section data={cards_intro} />
      <Section data={cards_homes} />
    </div>
  );
}

export default Home;
