"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

const SortBy = () => {
  const t = useTranslations("Category");
  const [sortOption, setSortOption] = useState("mostPopular");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    const params = new URLSearchParams(searchParams);

    switch (event.target.value) {
      case "priceLowToHigh":
        params.set("_sort", "price");
        params.set("_order", "asc");
        break;
      case "priceHighToLow":
        params.set("_sort", "price");
        params.set("_order", "desc");
        break;
      case "alphabetical":
        params.set("_sort", "title");
        params.set("_order", "asc");
        break;
      case "reverseAlphabetical":
        params.set("_sort", "title");
        params.set("_order", "desc");
        break;
      case "discount":
        params.set("_sort", "discount");
        params.set("_order", "desc");
        break;
      default:
        params.delete("_sort");
        params.delete("_order");
        break;
    }

    router.push(`?${params.toString()}`, undefined, { scroll: false });
  };

  return (
    <select
      value={sortOption}
      onChange={handleSortChange}
      className="form-select d-inline-block w-auto bg-transparent border-0"
    >
      <option value="mostPopular">{t("mostPopular")}</option>
      <option value="priceLowToHigh">{t("priceLowToHigh")}</option>
      <option value="priceHighToLow">{t("priceHighToLow")}</option>
      <option value="alphabetical">{t("alphabetical")}</option>
      <option value="reverseAlphabetical">{t("reverseAlphabetical")}</option>
      <option value="discount">{t("discount")}</option>
    </select>
  );
};

export default SortBy;
