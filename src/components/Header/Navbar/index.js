import { Link } from "@/navigation";
import { FaChevronDown } from "react-icons/fa";
import { StyledLink } from "./styles";
import Icons from "./Icons";
import SearchInput from "./SearchInput";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Header");
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
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
          <Link className="navbar-brand" href="/">
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
                {t("shop")}
                <span>
                  <FaChevronDown size={14} />
                </span>
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                {t("onSale")}
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                {t("newArrivals")}
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link" href="#">
                {t("brands")}
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
