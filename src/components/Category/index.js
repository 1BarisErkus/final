import { BiChevronDown } from "react-icons/bi";
import WearCard from "../Wear/Card";

import wear1 from "@/assets/images/wears/wear-1.png";
import wear2 from "@/assets/images/wears/wear-2.png";
import wear3 from "@/assets/images/wears/wear-3.png";
import wear4 from "@/assets/images/wears/wear-4.png";
import FilterComponent from "./Filter";

const cards = [
  {
    src: wear1,
    title: "T-shirt with Tape Details",
    price: 120,
  },
  {
    src: wear2,
    title: "Skinny Fit Jeans",
    price: 240,
    discount: 20,
  },
  {
    src: wear3,
    title: "Checkered Shirt",
    price: 180,
  },
  {
    src: wear4,
    title: "Sleeve Striped T-Shirt",
    price: 130,
    discount: 30,
  },
  {
    src: wear1,
    title: "T-shirt with Tape Details",
    price: 120,
  },
  {
    src: wear2,
    title: "Skinny Fit Jeans",
    price: 240,
    discount: 20,
  },
  {
    src: wear3,
    title: "Checkered Shirt",
    price: 180,
  },
  {
    src: wear4,
    title: "Sleeve Striped T-Shirt",
    price: 130,
    discount: 30,
  },
  {
    src: wear1,
    title: "T-shirt with Tape Details",
    price: 120,
  },
  {
    src: wear2,
    title: "Skinny Fit Jeans",
    price: 240,
    discount: 20,
  },
];

const Category = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <FilterComponent />
        </div>
        <div className="col-9">
          <div className="d-flex">
            <span className="fs-4 fw-bold">Casual</span>
            <div className="ms-auto mt-auto d-flex gap-3">
              <span className="opacity-50">Showing 1-10 of 100 Products</span>
              <div>
                <span className="opacity-50"></span> Sort by:{" "}
                <span className="opacity-100 fw-bold">
                  Most Popular <BiChevronDown />
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
                    Previous
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
                    Next
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
