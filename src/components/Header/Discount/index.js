"use client";

import {
  Container,
  HeaderWrapper,
  IconWrapper,
  StyledLink,
  TextWrapper,
} from "./styles";
import { IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { hideHeader } from "@/redux/slices/globalSlice";

const Discount = () => {
  const dispatch = useDispatch();

  const handleHideHeader = () => {
    dispatch(hideHeader());
  };

  const { isHeaderVisible } = useSelector((state) => state.global);

  return (
    isHeaderVisible && (
      <HeaderWrapper>
        <Container className="container">
          <TextWrapper className="container-md">
            Sign up and get 20% off all your orders.{" "}
            <StyledLink href="/signup">Sign Up Now</StyledLink>
          </TextWrapper>
          <IconWrapper>
            <IoMdClose size={20} onClick={handleHideHeader} />
          </IconWrapper>
        </Container>
      </HeaderWrapper>
    )
  );
};

export default Discount;
