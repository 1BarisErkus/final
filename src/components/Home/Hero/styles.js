"use client";

import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 80px 0;
  background-color: #f2f0f1;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const StyledLandingMobile = styled.div`
  height: 448px;
`;
