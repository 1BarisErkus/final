import Link from "next/link";
import Header from "../Header";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Header />
      <nav className="navbar navbar-expand-lg">
        <div className="container gap-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" href="#">
            <h1 className="fs-2">SHOP.CO</h1>
          </Link>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-1 text-black"
                  aria-current="page"
                  href="#"
                >
                  Shop
                  <span>
                    <FaChevronDown size={14} />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" href="#">
                  On Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" href="#">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" href="#">
                  Brands
                </Link>
              </li>
            </ul>
            <form
              className="d-flex position-relative flex-grow-1 mx-5"
              role="search"
            >
              <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
                <IoMdSearch size={24} color="gray" />
              </span>
              <input
                className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
            </form>
            <div className="d-flex align-items-center">
              <Link href="#" className="me-3">
                <FiShoppingCart size={24} />
              </Link>
              <Link href="#">
                <VscAccount size={24} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
