import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  width: 353px;
  margin-right: 20px;
  margin-bottom: 18px;
  margin-left: 0;
  padding: 24px 20px 20px;
  flex-direction: column;
  grid-column: 1/2;

  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledForm = styled.form``;
