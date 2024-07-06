import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IconsWrapper } from "./styles";

const Icons = () => {
  return (
    <IconsWrapper className="d-flex align-items-center">
      <Link href="#" className="me-3">
        <IoMdSearch size={24} />
      </Link>
      <Link href="#" className="me-3">
        <FiShoppingCart size={24} />
      </Link>
      <Link href="#">
        <VscAccount size={24} />
      </Link>
    </IconsWrapper>
  );
};

export default Icons;
