"use client";
import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid var(--tertiary);
`;

export const Row = styled.div`
  margin-top: 72px;
`;

export const H2 = styled.h2`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
