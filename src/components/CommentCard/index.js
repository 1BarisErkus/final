import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { StyledIcon } from "../Home/HappyCustomers/styles";

import tick from "@/assets/tick.png";

const CommentCard = ({ customer, postedDate }) => {
  return (
    <div
      className={`rounded-4 border mb-4 ${postedDate ? "col-5" : "col-4"} p-4`}
    >
      <div className="d-flex justify-content-between">
        <Rating
          style={{ maxWidth: 100 }}
          value={customer.rating}
          className="py-1"
          readOnly
        />
        {postedDate && <div>...</div>}
      </div>
      <h5 className="fw-bold my-2 d-flex gap-2">
        {customer.name}
        <StyledIcon>
          <Image
            src={tick}
            alt="verified"
            className="object-fit-contain"
            fill
          />
        </StyledIcon>
      </h5>
      <p className=" mt-2  opacity-50 fw-lighter">{customer.testimonial}</p>
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
