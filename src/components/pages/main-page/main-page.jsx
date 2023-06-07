import React from "react";
import About from "../../blocks/about/about.jsx";
import FeatureList from "../../blocks/feature-list/feature-list.jsx";
import featureList from "../../../mocks/feature-list.js";
import "./style";

function MainPage() {
  return (
    <>
      <About />
      <FeatureList features={featureList} />
    </>
  );
}

export default MainPage;
