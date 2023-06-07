import React from "react";
import { Card, Text, Image, Heading, FeatureName } from "./style";
import FeatureIcon from "../feature-icon/feature-icon.jsx";

function FeatureCard({ farm, name, image, about }) {
  let bgColor;

  if (farm) {
    bgColor = "#e1edce";
  } else {
    bgColor = "#f8ddd7";
  }

  return (
    <Card $bgColor={bgColor}>
      <Image src={image} alt="" width={56} height={56} />
      <Heading>
        <FeatureIcon farm={farm} />
        <FeatureName>{name}</FeatureName>
      </Heading>
      <Text>{about}</Text>
    </Card>
  );
}

export default FeatureCard;
