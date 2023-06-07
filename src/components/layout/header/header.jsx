import React from "react";
import Logo from "../../ui/logo/logo.jsx";
import Nav from "./../nav/nav.jsx";
import { StyledHeader } from "./style";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
