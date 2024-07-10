"use client";
import { usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  const t = useTranslations("Header");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (searchTerm) {
      query.set("title_like", searchTerm);
    } else {
      query.delete("title_like");
    }

    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  }, [searchTerm, router, pathname]);

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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
