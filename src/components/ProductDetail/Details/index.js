import { RiIndentIncrease } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import Comments from "./Comments";

const Details = ({ comments, productId }) => {
  const t = useTranslations("ProductDetail");
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-around pb-3 border-bottom">
            <div>
              <h5 className="fs-6 text-secondary">{t("productDetails")}</h5>
            </div>
            <div>
              <h5 className="fs-6 text-secondary">{t("ratingReviews")}</h5>
            </div>
            <div>
              <h5 className="fs-6 text-secondary">{t("faqs")}</h5>
            </div>
          </div>

          <div className="mt-4 d-flex flex-wrap">
            <div>
              <span className="fs-4 fw-bold">{t("allReviews")}</span> (451)
            </div>
            <div className="ms-auto d-flex flex-wrap gap-3">
              <button className="btn btn-light px-3 py-1 fs-4 d-flex align-items-center justify-content-center rounded-pill">
                <RiIndentIncrease />
              </button>
              <button className="btn btn-light px-3 py-1 fs-6 d-flex align-items-center justify-content-center rounded-pill">
                {t("latest")} <BiChevronDown />
              </button>
              <Button
                theme="dark"
                className="m-0 bg-black text-white"
                data-bs-toggle="modal"
                data-bs-target="#addCommentModal"
              >
                {t("writeReview")}
              </Button>
            </div>
          </div>

          <Modal productId={productId} />

          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default Details;
