import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};

  .feature-list .title {
    margin-bottom: 64px;

    text-align: center;
  }
`;

export const List = styled.ul`
  display: grid;
  margin-top: 64px;
  margin-bottom: 64px;
  padding: 0;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
`;
