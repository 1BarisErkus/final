"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { getHappyComments } from "@/lib/server/product";
import CommentCard from "../../CommentCard";
import { H2, Section, StyledButton } from "./styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const HappyCustomers = () => {
  const t = useTranslations("Home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const data = await getHappyComments();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section className="container pt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <H2 className="fw-bold integralFont">{t("ourHappyCustomers")}</H2>
        <div className="d-flex gap-3">
          <StyledButton onClick={handlePrev}>
            <FiArrowLeft size={24} />
          </StyledButton>
          <StyledButton onClick={handleNext}>
            <FiArrowRight size={24} />
          </StyledButton>
        </div>
      </div>
      <div className="position-relative overflow-hidden">
        <div
          className="d-flex transition-transform gap-3"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / (comments.length - 2)
            }%)`,
            transition: "transform 0.5s",
          }}
        >
          {comments?.length > 0 ? (
            comments.map((comment) => (
              <CommentCard
                key={comment.id}
                userId={comment.user_id}
                rating={comment.rating}
                content={comment.content}
                created_at={comment.created_at}
              />
            ))
          ) : (
            <div className="d-flex align-items-center justify-content-center w-100">
              {t("commentsNotFound")}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default HappyCustomers;
