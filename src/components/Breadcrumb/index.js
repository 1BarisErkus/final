import { useTranslations } from "next-intl";

const Breadcrumb = () => {
  const t = useTranslations("Breadcrumb");

  return (
    <nav aria-label="breadcrumb" className="mt-4 mb-5">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{t("home")}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {t("library")}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
