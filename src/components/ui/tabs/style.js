import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 16px;
`;

export const TabWrapper = styled.div`
  display: flex;
`;

export const Tab = styled.button`
  margin-right: 8px;
  padding: 8px 12px;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 1.5;

  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorGray};

  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  background-color: ${(props) =>
    props.$isActive && props.theme.colorForFarmIcon};
  color: ${(props) => props.$isActive && props.theme.colorWhite};
`;

export const Content = styled.div`
  margin: 0;
  margin-top: 18px;
  grid-column: 1/-1;

  font-size: 14px;
`;

export const Item = styled.p`
  margin: 0;
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Price = styled.p`
  width: fit-content;
  height: 29px;
  margin: 0;
  margin-top: 14px;
  padding: 4px 8px;

  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => props.theme.colorForBlueBackground};
`;
