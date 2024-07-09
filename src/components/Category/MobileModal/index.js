import { BiChevronDown } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterComponent from "../Filter";
import { useTranslations } from "next-intl";
import { FilterButtonWrapper } from "./stlyes";

const MobileModal = () => {
  const t = useTranslations("Category");
  return (
    <>
      <div className="d-md-block d-none">
        <span className="opacity-50"></span> {t("sortby")}:{" "}
        <span className="opacity-100 fw-bold">
          {t("mostPopular")} <BiChevronDown />
        </span>
      </div>
      <FilterButtonWrapper
        className="d-lg-none"
        data-bs-toggle="modal"
        data-bs-target="#filterModal"
      >
        <GiSettingsKnobs size={30} className="cursor" />
      </FilterButtonWrapper>
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 justify-content-center align-items-center">
            <div className="modal-body p-0 m-0">
              <FilterComponent modal={true} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileModal;
