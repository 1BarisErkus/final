import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { StyledIcon } from "../Home/HappyCustomers/styles";

import tick from "@/assets/tick.png";

const CommentCard = ({ customer }) => {
  return (
    <div className="rounded-4 border p-6 mb-4 col-4 p-4">
      <Rating
        style={{ maxWidth: 100 }}
        value={customer.rating}
        className="py-1"
        readOnly
      />
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
    </div>
  );
};

export default CommentCard;
