import styled from "styled-components";

export const StarStyle = styled.span`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: block;
  cursor: pointer;
`;

export const Text = styled.p`
  line-height: 1;
  margin: 0;
  margin-top: 8px;
  color: ${({ color }) => color || "#000"};
  font-size: ${({ size }) => `${size / 1.5}px`};
`;
