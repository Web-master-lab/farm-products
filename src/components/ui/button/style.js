import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: inline-block;
  padding: 16.5px 97.5px;
  min-width: 260px;
  min-height: 60px;

  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.colorWhite};
  text-decoration: none;
  text-align: center;

  background-color: ${(props) => props.theme.colorForButton};
  border: none;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }

  &:disabled {
    opacity: 0.7;
  }
`;
