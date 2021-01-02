import React from "react";
import Contact from "../Contact";
import DataPoints from "../DataPoints";
import Deliverable from "../Deliverable";
import FeeStructure from "../FeeStructure";
import ImageSlider from "../ImageSlider";
import Video from "../Video";

const Home = () => {
  return (
    <>
      <Video />
      <ImageSlider />
      <DataPoints />
      <FeeStructure />
      <Deliverable />

      <Contact />
    </>
  );
};

export default Home;
