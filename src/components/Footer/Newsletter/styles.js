"use client";
import styled from "styled-components";

export const NewsletterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 40px;
  position: relative;
  bottom: 100px;
  border-radius: 20px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  @media (max-width: 576px) {
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 32px;
  }
`;

export const Section = styled.div`
  @media (min-width: 992px) {
    text-align: left;
  }
`;
