"use client";
import { useEffect, useState } from "react";
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
import { filterColors } from "@/common/colors";
import ColorOption from "@/components/ColorOption";
import SizeButton from "@/components/SizeButton";
import Button from "@/components/Button";
import FilterButton from "./Button";
import { FiFilter } from "react-icons/fi";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";

const FilterComponent = ({ modal }) => {
  const t = useTranslations("Category");

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});

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
    t("tshirts"),
    t("shorts"),
    t("shirts"),
    t("hoodie"),
    t("jeans"),
  ];
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
  const dressStyles = [t("casual"), t("formal"), t("party"), t("gym")];

  const setCategory = (category) =>
    handleSelectFilterOptions("category", category.toLocaleLowerCase());
  const setColor = (colorName) =>
    handleSelectFilterOptions("color", colorName.toLocaleLowerCase());
  const setSize = (size) =>
    handleSelectFilterOptions("size", size.toLocaleLowerCase());
  const setDressStyle = (dressStyle) =>
    handleSelectFilterOptions("dressStyle", dressStyle.toLocaleLowerCase());
  const clearFilters = () => {
    router.push("category", { scroll: false });
    setSelectedFilterQueries({});
  };

  const applyAllFilters = () => {};

  return (
    <FilterContainer classname={{ modal }}>
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
            selected={selectedFilterQueries?.category?.includes(
              category.toLocaleLowerCase()
            )}
            onClick={() => setCategory(category)}
          >
            <span>{category}</span>
            <BiChevronRight size={24} />
          </FilterButton>
        ))}
      </ul>

      <SectionTitle>
        <span>{t("price")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <PriceRange className="pb-4 border-bottom mb-4">
        <span>$50</span>
        <input type="range" min="50" max="200" />
        <span>$200</span>
      </PriceRange>

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
            selected={selectedFilterQueries?.color?.includes(
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
            selected={selectedFilterQueries?.size?.includes(
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
            value={dressStyle.toLowerCase()}
            className="d-flex justify-content-between"
            selected={selectedFilterQueries?.dressStyle?.includes(
              dressStyle.toLocaleLowerCase()
            )}
            onClick={() => {
              setDressStyle(dressStyle);
            }}
          >
            <span>{dressStyle}</span>
            <BiChevronRight size={24} />
          </FilterButton>
        ))}
      </ul>
      <Button theme="dark" className="w-100 my-2" onClick={applyAllFilters}>
        {t("applyFilter")}
      </Button>
    </FilterContainer>
  );
};

export default FilterComponent;
