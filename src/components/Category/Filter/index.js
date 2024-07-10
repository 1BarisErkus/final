"use client";
import { use, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import {
  checkValidQuery,
  convertStringToQueriesObject,
  convertValidStringQueries,
} from "@/lib/filter";
import {
  ClearButtonWrapper,
  FilterContainer,
  PriceRange,
  SectionTitle,
} from "./styles";
import ColorOption from "@/components/ColorOption";
import SizeButton from "@/components/SizeButton";
import Button from "@/components/Button";
import FilterButton from "./Button";
import { FiFilter } from "react-icons/fi";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import RangeSlider from "react-range-slider-input";

const FilterComponent = ({ modal, className }) => {
  const t = useTranslations("Category");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  const handleSelectFilterOptions = (name, value) => {
    let selectedQueries = selectedFilterQueries;

    if (selectedQueries[name]) {
      if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }

    router.push(`?${convertValidStringQueries(selectedQueries)}`, {
      scroll: false,
    });
  };

  const filterCategories = [
    { name: t("tshirts"), value: "t-shirts" },
    { name: t("shorts"), value: "shorts" },
    { name: t("shirts"), value: "shirts" },
    { name: t("hoodie"), value: "hoodie" },
    { name: t("jeans"), value: "jeans" },
  ];
  const filterColors = {
    green: "#00C12B",
    red: "#F50606",
    yellow: "#F5DD06",
    orange: "#F57906",
    blue: "#06CAF5",
    darkblue: "#063AF5",
    purple: "#7D06F5",
    pink: "#F506A4",
    white: "#FFFFFF",
    black: "#000000",
  };
  const sizes = [
    t("xxs"),
    t("xs"),
    t("s"),
    t("m"),
    t("l"),
    t("xl"),
    t("xxl"),
    t("3xl"),
    t("4xl"),
  ];
  const dressStyles = [
    { name: t("casual"), value: "casual" },
    { name: t("formal"), value: "formal" },
    { name: t("party"), value: "party" },
    { name: t("gym"), value: "gym" },
  ];

  const setCategory = (category) =>
    handleSelectFilterOptions("category_like", category.toLowerCase());
  const setPrice = (price) => setPriceRange(price);
  const setColor = (colorName) =>
    handleSelectFilterOptions("color_like", colorName.toLowerCase());
  const setSize = (size) =>
    handleSelectFilterOptions("sizes_like", size.toLowerCase());
  const setDressStyle = (dressStyle) =>
    handleSelectFilterOptions("dressStyle_like", dressStyle.toLowerCase());
  const clearFilters = () => {
    setSelectedFilterQueries({});
    setPriceRange([0, 1000]);
    router.push("category", { scroll: false });
  };

  const applyAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("price_gte", priceRange[0]);
    searchParams.set("price_lte", priceRange[1]);
    router.replace(`?${searchParams.toString()}`, { scroll: false });
  };

  return (
    <FilterContainer className={className}>
      <SectionTitle className="pb-3 border-bottom">
        <span>{t("filters")}</span>
        {modal ? (
          <ClearButtonWrapper
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></ClearButtonWrapper>
        ) : (
          <ClearButtonWrapper onClick={clearFilters}>
            <FiFilter size={24} />
          </ClearButtonWrapper>
        )}
      </SectionTitle>

      <ul className="list-unstyled d-flex flex-column pb-3 mb-3 border-bottom gap-1">
        {filterCategories.map((category, i) => (
          <FilterButton
            key={i}
            className="d-flex justify-content-between"
            selected={selectedFilterQueries?.category_like?.includes(
              category.value.toLocaleLowerCase()
            )}
            onClick={() => setCategory(category.value)}
          >
            <span>{category.name}</span>
            <BiChevronRight size={24} />
          </FilterButton>
        ))}
      </ul>

      <SectionTitle>
        <span>{t("price")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <RangeSlider
        min={0}
        max={1000}
        value={priceRange}
        onInput={setPrice}
        className="mb-3"
      />
      <div className="mb-4 d-flex justify-content-between">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
      <SectionTitle>
        <span>{t("colors")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <div className="pb-3 border-bottom mb-3">
        {Object.entries(filterColors).map(([colorName, color]) => (
          <ColorOption
            key={color}
            name="color"
            value={colorName.toLowerCase()}
            color={color}
            selected={selectedFilterQueries?.color_like?.includes(
              colorName.toLocaleLowerCase()
            )}
            onClick={() => setColor(colorName)}
          />
        ))}
      </div>

      <SectionTitle>
        <span>{t("size")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <div className="pb-3 border-bottom mb-3">
        {sizes.map((size, i) => (
          <SizeButton
            key={i}
            name="size"
            value={size}
            selected={selectedFilterQueries?.sizes_like?.includes(
              size.toLocaleLowerCase()
            )}
            onClick={() => setSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </div>

      <SectionTitle>
        <span>{t("dressStyle")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <ul className="list-unstyled d-flex flex-column mb-3 gap-1">
        {dressStyles.map((dressStyle, i) => (
          <FilterButton
            key={i}
            name="dressStyle"
            className="d-flex justify-content-between"
            selected={selectedFilterQueries?.dressStyle_like?.includes(
              dressStyle.value.toLocaleLowerCase()
            )}
            onClick={() => {
              setDressStyle(dressStyle.value);
            }}
          >
            <span>{dressStyle.name}</span>
            <BiChevronRight size={24} />
          </FilterButton>
        ))}
      </ul>
      <Button
        theme="dark"
        className="w-100 my-2 bg-black text-white"
        onClick={applyAllFilters}
      >
        {t("applyFilter")}
      </Button>
    </FilterContainer>
  );
};

export default FilterComponent;
