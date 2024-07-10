import { useTranslations } from "next-intl";

const HeaderTitleList = () => {
  const t = useTranslations("ProductDetail");
  return (
    <ul
      className="nav nav-tabs d-flex align-items-center justify-content-around pb-3 border-bottom"
      id="contentTabs"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="productDetails-tab"
          data-bs-toggle="tab"
          data-bs-target="#productDetails"
          type="button"
          role="tab"
          aria-controls="productDetails"
          aria-selected="false"
          tabIndex={-1}
        >
          {t("productDetails")}
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="ratingReviews-tab"
          data-bs-toggle="tab"
          data-bs-target="#ratingReviews"
          type="button"
          role="tab"
          aria-controls="ratingReviews"
          aria-selected="true"
          tabIndex={-1}
        >
          {t("ratingReviews")}
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="faqs-tab"
          data-bs-toggle="tab"
          data-bs-target="#faqs"
          type="button"
          role="tab"
          aria-controls="faqs"
          aria-selected="false"
          tabIndex={-1}
        >
          {t("faqs")}
        </button>
      </li>
    </ul>
  );
};

export default HeaderTitleList;
