import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { StyledLink } from "./styles";
import Icons from "./Icons";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-lg gap-3 my-2">
        <div className="d-flex gap-3 flex-wrap">
          <button
            className="navbar-toggler border-0"
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
        </div>
        <div className="collapse navbar-collapse gap-3" id="mainNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <StyledLink
                className="nav-link d-flex gap-1"
                aria-current="page"
                href="#"
              >
                Shop
                <span>
                  <FaChevronDown size={14} />
                </span>
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                On Sale
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                New Arrivals
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                Brands
              </StyledLink>
            </li>
          </ul>
          <SearchInput />
        </div>
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
