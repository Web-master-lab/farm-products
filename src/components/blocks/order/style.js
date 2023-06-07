import styled from "styled-components";

export const Address = styled.input`
  margin-bottom: 20px;
  padding: 14px 12px;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorDefaultForText};

  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${(props) => props.theme.colorDefaultForText};
  }
`;

export const Heading = styled.p`
  margin: 0;
  margin-bottom: 24px;

  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 8px;

  font-size: 14px;
`;

export const Price = styled.p`
  margin: 0;
  margin-bottom: 32px;

  font-size: 24px;
  line-height: 1.15;
  font-weight: 700;
`;
