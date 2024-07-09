import CommentCard from "@/components/CommentCard";
import ViewButton from "@/components/ViewButton";
import { useTranslations } from "next-intl";

const Comments = ({ comments }) => {
  const t = useTranslations("ProductDetail");
  return (
    <div className="mt-4">
      <div className="row flex-wrap align-items-center justify-content-around">
        {comments && comments.length > 0 ? (
          comments
            .slice(0, 6)
            .map((comment) => (
              <CommentCard
                key={comment.id}
                rating={comment.rating}
                content={comment.content}
                createdAt={comment.created_at}
                postedDate
              />
            ))
        ) : (
          <div className="fs-5 text-secondary">{t("noReviews")}</div>
        )}
        <ViewButton
          className="d-flex mx-auto align-items-center justify-content-center"
          type="comment"
          data={comments}
        >
          {t("loadMore")}
        </ViewButton>
      </div>
    </div>
  );
};

export default Comments;
