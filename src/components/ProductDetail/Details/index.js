import { RiIndentIncrease } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/Button";
import CommentCard from "@/components/CommentCard";

const data = [
  {
    rating: 5,
    name: "John Doe",
    testimonial:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    id: 1,
  },
  {
    rating: 3,
    name: "John Doe",
    testimonial:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    id: 1,
  },
  {
    rating: 4.5,
    name: "John Doe",
    testimonial:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    id: 1,
  },
  {
    rating: 1.5,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
    id: 1,
  },
  {
    rating: 5,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
    id: 1,
  },
  {
    rating: 5,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero.",
    id: 1,
  },
];

const Details = () => {
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

          <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
            <div className="row flex-wrap align-items-center justify-content-around">
              {data.map((customer) => (
                <CommentCard key={customer.id} customer={customer} postedDate />
              ))}
            </div>
            <Button>Load More Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
