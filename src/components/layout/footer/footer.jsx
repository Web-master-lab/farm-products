import React from "react";
import { StyledFooter, Copyright } from "./style";
import Logo from "../../ui/logo/logo.jsx";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}

export default Footer;
