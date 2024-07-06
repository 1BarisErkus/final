import { CommentRow, H2, Section } from "./styles";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CommentCard from "./CommentCard";

const HappyCustomers = () => {
  return (
    <Section className="mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <H2>OUR HAPPY CUSTOMERS</H2>
              <div className="d-flex align-items-end gap-2">
                <FiArrowLeft size={24} />
                <FiArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
        <CommentRow className="row">
          <div className="col-12 d-flex gap-5 align-items-center justify-content-center">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </CommentRow>
      </div>
    </Section>
  );
};

export default HappyCustomers;
