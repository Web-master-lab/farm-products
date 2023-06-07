import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  z-index: 3;

  display: flex;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span``;
