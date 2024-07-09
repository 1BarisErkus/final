"use client";
import { Link } from "@/navigation";
import styled from "styled-components";

export const Logo = styled.h2`
  font-size: 33.45px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 63px;
  text-align: left;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled(Link)`
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  color: black;
  border: 1px solid #00000033;
  &:hover {
    background-color: black;
    color: white;
  }
`;
