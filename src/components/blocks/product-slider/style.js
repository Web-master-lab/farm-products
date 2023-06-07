import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  position: absolute;
  left: 463px;
  top: 40px;

  width: 727px;
  height: 753px;
`;

export const StyledSlide = styled.div`
  display: grid;
  width: 727px;
  height: 288px;
  padding: 20px;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  justify-items: start;

  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Image = styled.img`
  grid-column: 1/2;
  grid-row: 1/4;
`;
