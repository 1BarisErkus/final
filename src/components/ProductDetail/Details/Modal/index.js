"use client";
import { addComment } from "@/lib/server";
import { Rating } from "@smastrom/react-rating";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Modal = ({ productId }) => {
  const t = useTranslations("ProductDetail");

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addComment(productId, { rating, content: comment });
      if (res.status === 200) {
        alert("Comment added successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="modal fade"
      id="addCommentModal"
      tabIndex="-1"
      aria-labelledby="addCommentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addCommentModalLabel">
                {t("modalTitle")}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="fs-6">{t("modalSubtitle")}</h5>
              <Rating
                id="rating"
                style={{ maxWidth: 200 }}
                className="d-flex mx-auto my-3"
                value={rating}
                onChange={setRating}
              />
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("modalClose")}
              </button>
              <button type="submit" className="btn btn-primary">
                {t("modalSubmit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
