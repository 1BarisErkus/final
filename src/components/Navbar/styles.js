"use client";

import styled from "styled-components";

export const IconsWrapper = styled.div`
  > *:first-child {
    display: none;
  }
  @media (max-width: 991px) {
    > *:first-child {
      display: block;
    }
  }
`;
