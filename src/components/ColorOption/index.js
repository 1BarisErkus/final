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
  position: relative;
`;

const Tick = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ color }) => (color === "#FFFFFF" ? "black" : "white")};
`;

const ColorOption = ({ color, selected, ...props }) => {
  return (
    <Option color={color} {...props}>
      {selected && <Tick color={color}>&#10004;</Tick>}
    </Option>
  );
};

export default ColorOption;
