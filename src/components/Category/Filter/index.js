"use client";
import { useState } from "react";
import { FilterContainer, PriceRange, SectionTitle } from "./styles";
import { FiFilter } from "react-icons/fi";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import ColorOption from "@/components/ColorOption";
import SizeButton from "@/components/SizeButton";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

const FilterComponent = () => {
  const t = useTranslations("Category");

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

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

  return (
    <FilterContainer>
      <SectionTitle className="pb-3 border-bottom">
        <span>{t("filters")}</span>
        <FiFilter />
      </SectionTitle>

      <ul className="list-unstyled d-flex flex-column gap-3 pb-3 mb-3 border-bottom">
        {filterCategories.map((category, i) => (
          <li key={i} className="d-flex justify-content-between">
            <span>{category}</span>
            <BiChevronRight size={24} />
          </li>
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
        {[
          "#00C12B",
          "#F50606",
          "#F5DD06",
          "#F57906",
          "#06CAF5",
          "#063AF5",
          "#7D06F5",
          "#F506A4",
          "#FFFFFF",
          "#000000",
        ].map((color, i) => (
          <ColorOption
            key={i}
            color={color}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
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
            selected={selectedSize === size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </div>

      <SectionTitle>
        <span>{t("dressStyle")}</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <ul className="list-unstyled d-flex flex-column gap-3 mb-3">
        {dressStyles.map((dressStyle, i) => (
          <li key={i} className="d-flex justify-content-between">
            <span>{dressStyle}</span>
            <BiChevronRight size={24} />
          </li>
        ))}
      </ul>
      <Button theme="dark" className="w-100 my-2">
        {t("applyFilter")}
      </Button>
    </FilterContainer>
  );
};

export default FilterComponent;
