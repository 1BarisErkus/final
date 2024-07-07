import { RiIndentIncrease } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/Button";
import CommentCard from "@/components/CommentCard";

const Details = ({ comments }) => {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex align-items-center justify-content-around pb-3 border-bottom">
            <div>
              <h5 className="fs-6 text-secondary">Product Details</h5>
            </div>
            <div>
              <h5 className="fs-6 text-secondary">Rating & Reviews</h5>
            </div>
            <div>
              <h5 className="fs-6 text-secondary">FAQs</h5>
            </div>
          </div>

          <div className="mt-4 d-flex">
            <div>
              <span className="fs-4 fw-bold">All Reviews</span> (451)
            </div>
            <div className="ms-auto d-flex gap-3">
              <button className="btn btn-light px-3 py-1 fs-4 d-flex align-items-center justify-content-center rounded-pill">
                <RiIndentIncrease />
              </button>
              <button className="btn btn-light px-3 py-1 fs-6 d-flex align-items-center justify-content-center rounded-pill">
                Latest <BiChevronDown />
              </button>
              <Button theme="dark" className="m-0">
                Write a Review
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <div className="row flex-wrap align-items-center justify-content-around">
              {comments && comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    userId={comment.user_id}
                    rating={comment.rating}
                    content={comment.content}
                    created_at={comment.created_at}
                    postedDate
                  />
                ))
              ) : (
                <div className="fs-5 text-secondary">No reviews yet</div>
              )}
            </div>
            <Button className="d-flex mx-auto">Load More Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
