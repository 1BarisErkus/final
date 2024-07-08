import { Link } from "@/navigation";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IconsWrapper } from "./styles";
import Language from "./Language";

const Icons = () => {
  return (
    <IconsWrapper className="d-flex align-items-center gap-3">
      <Link href="#">
        <IoMdSearch size={24} />
      </Link>
      <Link href="#">
        <FiShoppingCart size={24} />
      </Link>
      <Link href="#">
        <VscAccount size={24} />
      </Link>
      <Language />
    </IconsWrapper>
  );
};

export default Icons;
