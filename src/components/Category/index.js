import { BiChevronDown } from "react-icons/bi";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import { useTranslations } from "next-intl";

const cards = [];

const Category = () => {
  const t = useTranslations("Category");
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <FilterComponent />
        </div>
        <div className="col-9">
          <div className="d-flex">
            <span className="fs-4 fw-bold">{t("casual")}</span>
            <div className="ms-auto mt-auto d-flex gap-3">
              <span className="opacity-50">{t("showing")}</span>
              <div>
                <span className="opacity-50"></span> {t("sortby")}:{" "}
                <span className="opacity-100 fw-bold">
                  {t("mostPopular")} <BiChevronDown />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="row align-items-center gap-4">
              {cards.map((card, index) => (
                <WearCard key={index} {...card} />
              ))}
            </div>
            <nav
              aria-label="Page navigation example"
              className="d-flex justify-content-center"
            >
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    {t("previous")}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    {t("next")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
