import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav``;

export const StyledButton = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  color: ${(props) => props.theme.colorDefaultForText};
  text-decoration: none;
`;
