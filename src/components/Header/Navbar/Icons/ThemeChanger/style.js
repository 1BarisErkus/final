"use client";
import styled from "styled-components";

export const ThemeChangerWrapper = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  color: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  padding: 5px 10px;
  transition: background-color 0.3s;
  width: 70px;
`;
