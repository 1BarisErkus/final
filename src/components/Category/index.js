import { Link } from "@/navigation";
import { getProducts } from "@/lib/server/product";
import { calculateRating } from "@/lib/helpers";
import WearCardList from "../Wear/CardList";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import Header from "./Header";
import Pagination from "./Pagination";

const Category = async ({ searchParams }) => {
  const query = new URLSearchParams(searchParams).toString();
  const page = searchParams["_page"] ?? "1";
  const limit = searchParams["_limit"] ?? "9";
  console.log(page, limit);
  // const data = await getProducts(query);
  const data = await getProducts(`${query}&_page=${page}&_limit=${limit}`);
  console.log(data);

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
          <Pagination
            hasNextPage={page * limit <= data.length}
            hasPrevPage={page > 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
