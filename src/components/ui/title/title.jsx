import React from "react";
import { StyledTitle } from "./style";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  EXTRA_SMALL: "extra-small",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4"
};

function Title({ level = 1, size, children, className }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
