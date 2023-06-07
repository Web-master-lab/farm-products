import styled from "styled-components";

export const Card = styled.article`
  display: grid;
  padding: 20px;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 60px 1fr;
  gap: 20px;

  background-color: ${(props) => props.$bgColor};
`;

export const Image = styled.img`
  grid-column: 1/2;
`;

export const Heading = styled.div`
  grid-column: 2/4;
`;

export const FeatureName = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  grid-column: 1/4;
`;
