import StarRating from "@/components/StarRating";
import React from "react";
import { Card, CardBody } from "./styles";

const CommentCard = () => {
  return (
    <Card className="card">
      <CardBody className="card-body">
        <h5 className="card-title">
          <StarRating />
        </h5>
        <h6 className="card-subtitle fw-bold fs-5">Sarah M.</h6>
        <p className="card-text">
          I&apos;m blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece
          I&apos;ve bought has exceeded my expectations.
        </p>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
