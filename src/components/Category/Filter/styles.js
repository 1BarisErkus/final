"use client";
import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
`;

export const SectionTitle = styled.h5`
  font-weight: bold;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
`;

export const PriceRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClearButtonWrapper = styled.div`
  cursor: pointer;
`;
