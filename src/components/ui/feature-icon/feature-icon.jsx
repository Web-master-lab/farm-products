import React from "react";
import { StyledFeatureIcon, Text } from "./style";

function FeatureIcon({ farm }) {
  let options;
  if (farm) {
    options = {
      text: "Фермерские продукты",
      bgColor: "#88aa4d"
    };
  } else {
    options = {
      text: "Магазинные продукты",
      bgColor: "#f75531"
    };
  }
  return (
    <StyledFeatureIcon $bgColor={options.bgColor}>
      <Text dangerouslySetInnerHTML={{ __html: options.text }} />
    </StyledFeatureIcon>
  );
}

export default FeatureIcon;
