"use client";
import styled from "styled-components";

const Option = styled.div`
  display: inline-block;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  border: 1px solid gray;
  cursor: pointer;
`;

const ColorOption = ({ color }) => {
  return <Option color={color} />;
};

export default ColorOption;
