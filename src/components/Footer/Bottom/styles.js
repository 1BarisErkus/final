"use client";
import { Link } from "@/navigation";
import styled from "styled-components";

export const Bottom = styled.div`
  padding: 25px 0;
  border-top: 1px solid #dee2e6;
  text-align: center;
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #6c757d;
  text-align: left;
`;

export const PaymentIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media (min-width: 576px) {
    margin-top: 0;
  }
`;

export const PaymentIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  border-radius: 5px;
  background-color: var(--primary);
  border: none;
`;
