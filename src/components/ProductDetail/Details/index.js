import { RiIndentIncrease } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/Button";
import CommentCard from "@/components/CommentCard";
import { useTranslations } from "next-intl";
import Modal from "./Modal";

const Details = ({ comments }) => {
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
                className="m-0"
                data-bs-toggle="modal"
                data-bs-target="#addCommentModal"
              >
                {t("writeReview")}
              </Button>
            </div>
          </div>

          <Modal />

          <div className="mt-4">
            <div className="row flex-wrap align-items-center justify-content-around">
              {comments && comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    userId={comment.user_id}
                    rating={comment.rating}
                    content={comment.content}
                    createdAt={comment.created_at}
                    postedDate
                  />
                ))
              ) : (
                <div className="fs-5 text-secondary">{t("noReviews")}</div>
              )}
            </div>
            <Button className="d-flex mx-auto align-items-center justify-content-center">
              {t("loadMore")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
