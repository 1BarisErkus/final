"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { calculateRating } from "@/lib/helpers";
import WearCard from "@/components/Wear/Card";
import StyledButton from "@/components/Button";
import CommentCard from "../CommentCard";

const ViewButton = ({ data, type }) => {
  const [click, setClick] = useState(false);
  const t = useTranslations("ShowCase");

  return (
    <>
      {click && type === "wear"
        ? data.slice(4).map((item) => {
            const rating = calculateRating(item.comments);
            return (
              <WearCard
                key={item.id}
                src={item.image}
                title={item.title}
                rating={rating}
                price={item.price}
                discount={item.discount}
              />
            );
          })
        : click &&
          type === "comment" &&
          data
            .slice(6)
            .map((comment) => (
              <CommentCard
                key={comment.id}
                userId={comment.user_id}
                rating={comment.rating}
                content={comment.content}
                createdAt={comment.created_at}
                postedDate
              />
            ))}
      <div className="col-12 d-flex justify-content-center">
        {click ? (
          <StyledButton
            className="mt-0"
            onClick={() => {
              setClick(false);
            }}
          >
            {t("viewLess")}
          </StyledButton>
        ) : (
          <StyledButton
            className="mt-0"
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
