import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { getProducts } from "@/lib/server";
import { calculateRating } from "@/lib/helpers";
import WearCardList from "../Wear/CardList";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import { BiChevronDown } from "react-icons/bi";

const Category = async () => {
  const data = await getProducts();
  const t = await getTranslations("Category");

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <FilterComponent products={data} />
        </div>
        <div className="col-9 m-0">
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
          <div>
            <div className="row align-items-center gap-4">
              <WearCardList className="justify-content-start mt-4">
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
            </div>
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
    </div>
  );
};

export default Category;
