import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;

  font-size: ${(props) => {
    let fontSize = "36px";

    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }

    if (props.$size === TitleSize.SMALL) {
      fontSize = "32px";
    }

    if (props.$size === TitleSize.EXTRA_SMALL) {
      fontSize = "24px";
    }
    return fontSize;
  }};
  line-height: 1.15;
`;
