import React from "react";
import Button from "./../../ui/button/button.jsx";
import { StyledNav, StyledButton } from "./style";
import { useLocation } from "react-router-dom";

function Nav() {
  const buttons = [
    {
      link: "/order",
      button: <Button link="order">Купить</Button>
    },
    {
      link: "/",
      button: <StyledButton to="/">Главная</StyledButton>
    }
  ];

  const pathname = useLocation().pathname;

  return (
    <StyledNav>
      {buttons
        .filter((button) => button.link !== pathname)
        .map((button) => button.button)}
    </StyledNav>
  );
}

export default Nav;
