"use client";
import styled from "styled-components";

const Button = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 62px;
  border: none;
  background-color: #f0f0f0;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SizeButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default SizeButton;
