import styled from "styled-components";
import Farmer from "../../../assests/farmer.svg";

export const StyledAbout = styled.section`
  position: relative;
  padding: 183px 652px 183px 90px;

  background-color: ${(props) => props.theme.colorForBlueBackground};

  &::after {
    content: "";
    position: absolute;
    top: 36px;
    right: 90px;

    width: 446px;
    height: 627px;

    background-image: url(${Farmer});
    background-repeat: no-repeat;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 3;

  min-width: 550px;
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 0;
`;
