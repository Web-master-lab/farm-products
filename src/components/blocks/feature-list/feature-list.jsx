import React from "react";
import { StyledSection, List, Item } from "./style";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title.jsx";
import FeatureCard from "../../ui/feature-card/feature-card.jsx";
import Button from "../../ui/button/button";

function FeatureList({ features }) {
  return features && features.length ? (
    <StyledSection>
      <Title level={TitleLevel.H2} size={TitleSize.DEFAULT}>
        Почему фермерские продукты лучше?
      </Title>
      <List>
        {features.map((feature) => (
          <Item key={feature.id}>
            <FeatureCard {...feature} />
          </Item>
        ))}
      </List>
      <Button link="/order">Купить</Button>
    </StyledSection>
  ) : null;
}

export default FeatureList;
