"use client";
import Left from "./Left";
import Right from "./Right";
import { useEffect, useState } from "react";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="row gap-5 justify-content-center">
        <div className="col-lg-6 p-0">
          <Left />
        </div>
        <div className="col-lg-5 p-0">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Cart;
