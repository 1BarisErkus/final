"use client";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  @media (max-width: 480px) {
    :first-child {
      display: none;
    }
  }
`;
