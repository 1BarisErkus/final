"use client";
import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--secondary);
  background-color: var(--primary);
  border: 1px solid var(--secondary);
  margin-top: 32px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;
