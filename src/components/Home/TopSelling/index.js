import ShowCase from "@/components/ShowCase";

import wear1 from "@/assets/images/wears/wear-1.png";
import wear2 from "@/assets/images/wears/wear-2.png";
import wear3 from "@/assets/images/wears/wear-3.png";
import wear4 from "@/assets/images/wears/wear-4.png";

const cards = [
  {
    src: wear1,
    title: "T-shirt with Tape Details",
    price: 120,
  },
  {
    src: wear2,
    title: "Skinny Fit Jeans",
    price: 240,
    discount: 20,
  },
  {
    src: wear3,
    title: "Checkered Shirt",
    price: 180,
  },
  {
    src: wear4,
    title: "Sleeve Striped T-Shirt",
    price: 130,
    discount: 30,
  },
];

const TopSelling = () => {
  return <ShowCase title="Top Sellers" button cards={cards} />;
};

export default TopSelling;
