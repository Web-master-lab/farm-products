import React from "react";
import { ReactComponent as LogoImage } from "../../../assests/logo.svg";
import { StyledLogo, LogoText } from "./style";

function Logo() {
  return (
    <StyledLogo to="/">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
