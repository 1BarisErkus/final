"use client";
import { useState } from "react";
import { FilterContainer, PriceRange, SectionTitle } from "./styles";
import { FiFilter } from "react-icons/fi";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import ColorOption from "@/components/ColorOption";
import SizeButton from "@/components/SizeButton";
import Button from "@/components/Button";

const FilterComponent = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <FilterContainer>
      <SectionTitle className="pb-3 border-bottom">
        <span>Filters</span>
        <FiFilter />
      </SectionTitle>

      <ul className="list-unstyled d-flex flex-column gap-3 pb-3 mb-3 border-bottom">
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
          (category, i) => (
            <li key={i} className="d-flex justify-content-between">
              <span>{category}</span>
              <BiChevronRight size={24} />
            </li>
          )
        )}
      </ul>

      <SectionTitle>
        <span>Price</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <PriceRange className="pb-4 border-bottom mb-4">
        <span>$50</span>
        <input type="range" min="50" max="200" />
        <span>$200</span>
      </PriceRange>

      <SectionTitle>
        <span>Colors</span>
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
        <span>Size</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <div className="pb-3 border-bottom mb-3">
        {[
          "XX-Small",
          "X-Small",
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "XX-Large",
          "3X-Large",
          "4X-Large",
        ].map((size, i) => (
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
        <span>Dress Style</span>
        <BiChevronUp size={24} />
      </SectionTitle>
      <ul className="list-unstyled d-flex flex-column gap-3 mb-3">
        {["Casual", "Formal", "Party", "Gym"].map((dressStyle, i) => (
          <li key={i} className="d-flex justify-content-between">
            <span>{dressStyle}</span>
            <BiChevronRight size={24} />
          </li>
        ))}
      </ul>
      <Button theme="dark" className="w-100 my-2">
        Apply Filter
      </Button>
    </FilterContainer>
  );
};

export default FilterComponent;
