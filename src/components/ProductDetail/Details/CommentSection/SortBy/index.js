"use client";
import { useRouter } from "@/navigation";
import { Select } from "../styles";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SortBy = () => {
  const t = useTranslations("ProductDetail");
  const [isMounted, setIsMounted] = useState(false);
  const [sortOption, setSortOption] = useState("sortByDate");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    const params = new URLSearchParams(searchParams);

    switch (event.target.value) {
      case "sortByDate":
        params.set("_sort", "created_at");
        params.set("_order", "desc");
        break;
      case "sortByDateOld":
        params.set("_sort", "created_at");
        params.set("_order", "asc");
        break;
      case "sortByRating":
        params.set("_sort", "rating");
        params.set("_order", "desc");
        break;
      case "sortByRatingLow":
        params.set("_sort", "rating");
        params.set("_order", "asc");
        break;
      default:
        params.delete("_sort");
        params.delete("_order");
        break;
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Select
      value={sortOption}
      onChange={handleSortChange}
      className="form-select d-inline-block bg-transparent border-0 fs-6"
    >
      &#8595;
      <option value="sortByDate">{t("sortByDate")}</option>
      <option value="sortByDateOld">{t("sortByDateOld")}</option>
      <option value="sortByRating">{t("sortByRating")}</option>
      <option value="sortByRatingLow">{t("sortByRatingLow")}</option>
    </Select>
  );
};

export default SortBy;
