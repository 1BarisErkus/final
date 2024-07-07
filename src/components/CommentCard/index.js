import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { StyledIcon } from "../Home/HappyCustomers/styles";

import tick from "@/assets/tick.png";

const CommentCard = ({ rating, content, username, postedDate }) => {
  username = "John Doe";
  return (
    <div
      className={`rounded-4 border mb-4 mx-2 ${
        postedDate ? "col-lg-5" : "col-lg-4"
      } col-12 p-4`}
    >
      <div className="d-flex justify-content-between">
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          className="py-1"
          readOnly
        />
        {postedDate && <div>...</div>}
      </div>
      <h5 className="fw-bold my-2 d-flex gap-2">
        {username}
        <StyledIcon>
          <Image
            src={tick}
            alt="verified"
            className="object-fit-contain"
            fill
          />
        </StyledIcon>
      </h5>
      <p className=" mt-2  opacity-50 fw-lighter">{content}</p>
      {postedDate && (
        <div>
          <span className="fs-6 text-secondary fw-bold">
            Posted on August 14, 2023
          </span>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
