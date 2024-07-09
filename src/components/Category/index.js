import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { getProducts } from "@/lib/server/product";
import { calculateRating } from "@/lib/helpers";
import WearCardList from "../Wear/CardList";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import Header from "./Header";

const Category = async ({ searchParams }) => {
  const query = new URLSearchParams(searchParams).toString();
  const data = await getProducts(query);
  const t = await getTranslations("Category");

  return (
    <div className="container ps-0">
      <div className="row m-0 p-0">
        <div className="col-lg-3 col-12 d-xxl-block d-none m-0 p-0">
          <FilterComponent products={data} />
        </div>
        <div className="col-lg-9 col-12 m-0 p-0">
          <Header />
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
