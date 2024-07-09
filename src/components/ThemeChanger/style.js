"use client";
import styled from "styled-components";

export const ThemeChangerWrapper = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: background-color 0.3s;
`;
