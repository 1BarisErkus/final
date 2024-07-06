"use client";

import { IconWrapper, StyledLink } from "./styles";
import { IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { hideHeader } from "@/redux/slices/globalSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleHideHeader = () => {
    dispatch(hideHeader());
  };

  const { isHeaderVisible } = useSelector((state) => state.global);

  return (
    isHeaderVisible && (
      <div className="bg-black text-white py-2">
        <div className="container mx-auto d-flex justify-content-center align-items-center text-center">
          <span className="container-md fs-6">
            Sign up and get 20% off all your orders.{" "}
            <StyledLink href="signup">Sign Up Now</StyledLink>
          </span>
          <IconWrapper className="d-flex p-1">
            <IoMdClose size={20} onClick={handleHideHeader} />
          </IconWrapper>
        </div>
      </div>
    )
  );
};

export default Header;
