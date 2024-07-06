"use client";
import styled from "styled-components";
import { RiMailCheckLine } from "react-icons/ri";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  @media (min-width: 992px) {
    text-align: right;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 50px;
  border: none;
  width: 100%;
`;

export const InputIcon = styled(RiMailCheckLine)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: black;
`;

export const SubscribeButton = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 50px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #343a40;
    color: white;
  }
`;
