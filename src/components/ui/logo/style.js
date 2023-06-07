import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  width: 398px;
  height: 44px;
  align-items: center;

  text-decoration: none;
`;

export const LogoText = styled.span`
  margin-left: 24px;

  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  color: ${(props) => props.theme.colorDefaultForText};
`;
