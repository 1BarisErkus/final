"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const Pagination = ({ hasNextPage, hasPrevPage }) => {
  const t = useTranslations("Category");
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("_page") ?? "1";
  const limit = searchParams.get("_limit") ?? "9";

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <ul className="pagination mt-5">
        <li className="page-item">
          <button
            className={`page-link ${!hasPrevPage ? "disabled" : ""}`}
            onClick={() => {
              router.push(`?_page=${Number(page) - 1}&_limit=${limit}`);
            }}
          >
            {t("previous")}
          </button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${!hasNextPage ? "disabled" : ""}`}
            onClick={() => {
              router.push(`?_page=${Number(page) + 1}&_limit=${limit}`);
            }}
          >
            {t("next")}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
