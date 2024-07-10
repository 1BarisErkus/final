"use client";
import { usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  const t = useTranslations("Header");
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchText.length > 0) {
      console.log("pathname", pathname);
      console.log(!pathname.includes("category"));
      if (!pathname.includes("category")) {
        // router.push(`/category?title_like=${searchText}`);
      }
      // router.push(`?title_like=${searchText}`);
    } else {
      // router.replace("/category");
    }
  }, [searchText, router, pathname]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="d-flex position-relative flex-grow-1">
      <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
        <IoMdSearch size={24} color="gray" />
      </span>
      <input
        className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
        placeholder={t("inputPlaceholder")}
        type="search"
        aria-label="Search"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
