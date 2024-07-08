import { useTranslations } from "next-intl";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  const t = useTranslations("Header");
  return (
    <form className="d-flex position-relative flex-grow-1" role="search">
      <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
        <IoMdSearch size={24} color="gray" />
      </span>
      <input
        className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
        type="search"
        placeholder={t("inputPlaceholder")}
        aria-label="Search"
      />
    </form>
  );
};

export default SearchInput;
