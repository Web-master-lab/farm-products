import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title.jsx";
import { StyledAbout, Text, TextWrapper } from "./style";

function About() {
  return (
    <StyledAbout>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H2}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledAbout>
  );
}

export default About;
