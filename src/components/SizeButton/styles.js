"use client";
import styled from "styled-components";

export const SizeOption = styled.button`
  border: none;
  background-color: ${(props) => (props.selected ? "black" : "#e0e0e0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  padding: 12px 24px;
  margin: 5px;
  border-radius: 62px;
  cursor: pointer;
`;
