"use client";
import styled from "styled-components";

export const StyledButton = styled.li`
  padding: 6px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? "var(--filter-hover)" : "transparent"};
  color: var(--secondary);
`;
