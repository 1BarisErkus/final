import Button from "@/components/Button";
import ColorOption from "@/components/ColorOption";
import ProductCountButton from "@/components/ProductCountButton";
import SizeButton from "@/components/SizeButton";
import {
  DiscountlessPrice,
  DiscountPercent,
  Price,
} from "@/components/Wear/Card/styles";
import { Rating } from "@smastrom/react-rating";

const Content = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="fs-1 d-none d-lg-block">ONE LIFE GRAPHIC T-SHIRT</h1>
          <h1 className="fs-3 d-block d-lg-none">ONE LIFE GRAPHIC T-SHIRT</h1>
          <Rating
            value={4.5}
            style={{ maxWidth: 150 }}
            className="my-2 fs-1"
            readOnly
          />
          <div className="d-flex align-items-center gap-2">
            <Price className="fs-2">$250</Price>
            <DiscountlessPrice className="fs-2">$270</DiscountlessPrice>
            <DiscountPercent className="fs-6">20%</DiscountPercent>
          </div>
          <p className="mt-2 pb-4 border-bottom text-secondary">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="mt-2 pb-4 border-bottom">
            <h5 className="fs-6 text-secondary">Select Colors</h5>
            <div className="d-flex mt-3">
              <ColorOption color="#4F4631" />
              <ColorOption color="#314F4A" />
              <ColorOption color="#31344F" />
            </div>
          </div>
          <div className="mt-4 pb-4 border-bottom">
            <h5 className="fs-6 text-secondary">Choose Size</h5>
            <div className="d-flex mt-3">
              <SizeButton>Small</SizeButton>
              <SizeButton>Medium</SizeButton>
              <SizeButton>Large</SizeButton>
              <SizeButton>X-Large</SizeButton>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <ProductCountButton>1</ProductCountButton>
              <Button theme="dark" className="m-0">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
