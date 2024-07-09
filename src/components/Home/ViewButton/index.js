"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { calculateRating } from "@/lib/helpers";
import WearCard from "@/components/Wear/Card";
import StyledButton from "@/components/Button";

const ViewButton = ({ data }) => {
  const [click, setClick] = useState(false);
  const t = useTranslations("ShowCase");

  console.log(click);
  console.log(data);

  return (
    <>
      {click
        ? data.slice(4).map((product) => {
            const rating = calculateRating(product.comments);
            return (
              <WearCard
                key={product.id}
                src={product.image}
                title={product.title}
                rating={rating}
                price={product.price}
                discount={product.discount}
              />
            );
          })
        : ""}
      <div className="col-12 d-flex justify-content-center">
        {click ? (
          <StyledButton
            className="mt-5"
            onClick={() => {
              setClick(false);
            }}
          >
            {t("viewLess")}
          </StyledButton>
        ) : (
          <StyledButton
            className="mt-5"
            onClick={() => {
              setClick(true);
            }}
          >
            {t("viewAll")}
          </StyledButton>
        )}
      </div>
    </>
  );
};

export default ViewButton;
