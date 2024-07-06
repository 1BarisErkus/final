"use client";
import Link from "next/link";
import styled from "styled-components";

export const H5 = styled.h5`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
