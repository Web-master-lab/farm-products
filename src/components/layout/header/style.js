import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;
