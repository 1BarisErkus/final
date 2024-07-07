"use client";
import { useState } from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";

const Container = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 62px;
  font-size: 20px;
  padding: 12px 16px;
  min-width: 130px;
  max-width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBiMinus = styled(BiMinus)`
  cursor: pointer;
`;

const StyledBiPlus = styled(BiPlus)`
  cursor: pointer;
`;

const Count = styled.span`
  user-select: none;
`;

const ProductCountButton = () => {
  const [count, setCount] = useState(1);

  return (
    <Container>
      <StyledBiMinus onClick={() => setCount(count - 1)} />
      <Count>{count}</Count>
      <StyledBiPlus onClick={() => setCount(count + 1)} />
    </Container>
  );
};

export default ProductCountButton;
