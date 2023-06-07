import styled from "styled-components";

export const StyledFeatureIcon = styled.div`
  display: flex;
  width: 178px;
  height: 25px;
  padding: 4px 10px;
  align-items: center;

  font-size: 14px;
  line-height: 1.5;

  background-color: ${(props) => props.$bgColor};
`;

export const Text = styled.p`
  margin: 0;

  color: ${(props) => props.theme.colorWhite};
`;
