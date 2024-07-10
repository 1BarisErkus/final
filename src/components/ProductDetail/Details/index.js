import { RiIndentIncrease } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import Comments from "./Comments";
import HeaderTitleList from "./HeaderTitleList";
import DetailsSection from "./DetailsSection";
import Faqs from "./Faqs";
import CommentsSection from "./CommentSection";

const Details = ({ comments, product, productId }) => {
  const t = useTranslations("ProductDetail");
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12">
          <HeaderTitleList />
          <div className="tab-content mt-4" id="myTabContent">
            <div
              className="tab-pane fade "
              id="productDetails"
              role="tabpanel"
              aria-labelledby="productDetails-tab"
            >
              <DetailsSection product={product} />
            </div>
            <div
              className="tab-pane fade show active"
              id="ratingReviews"
              role="tabpanel"
              aria-labelledby="ratingReviews-tab"
            >
              <CommentsSection comments={comments} productId={productId} />
            </div>
            <div
              className="tab-pane fade"
              id="faqs"
              role="tabpanel"
              aria-labelledby="faqs-tab"
            >
              <Faqs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
