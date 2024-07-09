import React from "react";
import { ImageWrapper, P } from "./styles";
import Image from "next/image";
import { RiDeleteBin3Fill } from "react-icons/ri";
import ProductCountButton from "@/components/ProductCountButton";

const Card = () => {
  return (
    <div
      className="card mb-3 border-0 border-bottom"
      style={{ maxWidth: "700px" }}
    >
      <div className="row g-0">
        <div className="col-xxl-2 d-flex align-items-center">
          <ImageWrapper>
            <Image
              src="/images/wears/wear-1.png"
              className="card-img-left object-fit-cover"
              alt="product"
              fill
            />
          </ImageWrapper>
        </div>
        <div className="col-xxl-10">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title fw-bold mb-0">
                Gradient Graphic T-shirt
              </h5>
              <RiDeleteBin3Fill className="fs-5 text-danger" />
            </div>
            <div className="mb-4">
              <P className="card-text pb-0 mb-0">
                Size: <span className="opacity-50">Large</span>
              </P>
              <P className="card-text">
                Color: <span className="opacity-50">White</span>
              </P>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-text fs-4 fw-bold">$145</p>
              <ProductCountButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
