import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { getProducts } from "@/lib/server";
import { calculateRating } from "@/lib/helpers";
import WearCardList from "../Wear/CardList";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import { BiChevronDown, BiFilter } from "react-icons/bi";

const Category = async () => {
  const data = await getProducts();
  const t = await getTranslations("Category");

  return (
    <div className="container ps-0">
      <div className="row m-0 p-0">
        <div className="col-lg-3 col-12 d-xxl-block d-none m-0 p-0">
          <FilterComponent products={data} />
        </div>
        <div className="col-lg-9 col-12 m-0 p-0">
          <div className="d-flex flex-wrap">
            <span className="fs-4 fw-bold">{t("casual")}</span>
            <div className="ms-auto mt-auto d-flex flex-wrap gap-3">
              <span className="opacity-50 d-md-block d-none">
                {t("showing")}
              </span>
              <div className="d-md-block d-none">
                <span className="opacity-50"></span> {t("sortby")}:{" "}
                <span className="opacity-100 fw-bold">
                  {t("mostPopular")} <BiChevronDown />
                </span>
              </div>
              <div
                className="d-lg-none"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
              >
                <BiFilter size={30} />
              </div>
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
            </div>
          </div>
          <WearCardList className="align-items-center justify-content-center justify-content-start mt-4">
            {data.map((card) => {
              const rating = calculateRating(card.comments);
              return (
                <Link key={card.id} href={`/product/${card.id}`}>
                  <WearCard
                    src={card.image}
                    title={card.title}
                    price={card.price}
                    discount={card.discount}
                    rating={rating}
                  />
                </Link>
              );
            })}
          </WearCardList>
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <ul className="pagination mt-5">
              <li className="page-item">
                <a className="page-link" href="#">
                  {t("previous")}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {t("next")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Category;
