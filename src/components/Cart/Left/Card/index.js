import React, { useEffect, useState } from "react";
import {
  CardContainer,
  ImageWrapper,
  P,
  RiDeleteBin3FillWrapper,
} from "./styles";
import Image from "next/image";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { getProduct } from "@/lib/server/product";
import { useDispatch, useSelector } from "react-redux";
import ProductCountButton from "@/components/ProductCountButton";
import { notify } from "@/common/notify";
import { useTranslations } from "next-intl";
import {
  decreaseProductCount,
  deleteProductToLocalCart,
  increaseProductCount,
} from "@/redux/slices/cartSlice";

const Card = ({ id, productId, size, color, count }) => {
  const t = useTranslations("ProductDetail");
  const [product, setProduct] = useState({});
  const [productCount, setProductCount] = useState(count);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  return (
    <CardContainer
      className="card mb-3 border-0 border-bottom"
      style={{ maxWidth: "700px" }}
    >
      <div className="row g-0">
        <div className="col-xxl-2 d-flex align-items-center">
          <ImageWrapper>
            <Image
              src={`/images/wears/${
                product ? product.image : "default-wear"
              }.png`}
              className="card-img-left object-fit-cover"
              alt="product"
              fill
            />
          </ImageWrapper>
        </div>
        <div className="col-xxl-10">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title fw-bold mb-0">{product?.title}</h5>
              <RiDeleteBin3FillWrapper>
                <RiDeleteBin3Fill
                  className="fs-5 text-danger"
                  onClick={() => dispatch(deleteProductToLocalCart(id))}
                />
              </RiDeleteBin3FillWrapper>
            </div>
            <div className="mb-4">
              <P className="card-text pb-0 mb-0">
                {t("size")}: <span className="opacity-50">{size}</span>
              </P>
              <P className="card-text">
                {t("color")}: <span className="opacity-50">{color}</span>
              </P>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-text fs-4 fw-bold">${product?.price}</p>
              <ProductCountButton
                count={productCount}
                cartDesc={async () => {
                  dispatch(decreaseProductCount(id));
                  setProductCount((prev) => prev - 1);

                  if (productCount <= 1)
                    notify(t("productHasBeenDeleted"), "error");
                }}
                cartInc={async () => {
                  if (product?.stock < productCount) {
                    notify(t("stockError"), "error");
                    return;
                  }
                  setProductCount((prev) => prev + 1);
                  dispatch(increaseProductCount(id));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
