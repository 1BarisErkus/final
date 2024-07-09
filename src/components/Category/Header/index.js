import { useTranslations } from "next-intl";
import MobileModal from "../MobileModal";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const t = useTranslations("Category");
  return (
    <div className="d-flex flex-wrap">
      <span className="fs-4 fw-bold">{t("casual")}</span>
      <div className="ms-auto mt-auto d-flex flex-wrap gap-3">
        <span className="opacity-50 d-md-block d-none">{t("showing")}</span>
        <div className="d-md-block d-none">
          <span className="opacity-50"></span> {t("sortby")}:{" "}
          <span className="opacity-100 fw-bold">
            {t("mostPopular")} <BiChevronDown />
          </span>
        </div>
        <MobileModal />
      </div>
    </div>
  );
};

export default Header;
