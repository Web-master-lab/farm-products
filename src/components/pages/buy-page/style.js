import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 40px 90px;

  background-color: ${(props) => props.theme.colorGray};
`;
