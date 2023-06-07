import styled, { css } from "styled-components";
import checkboxSelect from "../../../assests/checkbox.svg";

export const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;

export const Heading = styled.p`
  margin: 0;
  margin-bottom: 27px;

  font-weight: 700;
`;

export const CheckboxLabel = styled.span`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;

    width: 24px;
    height: 24px;

    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.colorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }

  &:last-of-type {
    margin-bottom: 4px;
  }
`;
