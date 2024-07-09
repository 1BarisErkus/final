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
import { useTranslations } from "next-intl";

const Content = ({
  title,
  price,
  discount,
  description,
  stock,
  sizes,
  color,
  rating,
}) => {
  const t = useTranslations("ProductDetail");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="fs-1 d-none d-lg-block">{title}</h1>
          <h1 className="fs-3 d-block d-lg-none">{title}</h1>
          <Rating
            value={rating}
            style={{ maxWidth: 150 }}
            className="my-2 fs-1"
            readOnly
          />
          <div className="d-flex align-items-center gap-2">
            <Price className="fs-2">${price}</Price>
            {discount !== 0 && (
              <>
                <DiscountlessPrice className="fs-2">
                  ${price / (1 - discount / 100)}
                </DiscountlessPrice>
                <DiscountPercent className="fs-6">{discount}%</DiscountPercent>
              </>
            )}
          </div>
          <p className="mt-2 pb-4 border-bottom text-secondary">
            {description}
          </p>
          <div className="mt-2 pb-4 border-bottom">
            <h5 className="fs-6 text-secondary">{t("selectColors")}</h5>
            <div className="d-flex mt-3">
              <ColorOption color="#4F4631" />
              <ColorOption color="#314F4A" />
              <ColorOption color="#31344F" />
            </div>
          </div>
          <div className="mt-4 pb-4 border-bottom">
            <h5 className="fs-6 text-secondary">{t("chooseSize")}</h5>
            <div className="d-flex flex-wrap mt-3">
              {sizes?.XXS > 0 ? <SizeButton>{t("xxs")}</SizeButton> : null}
              {sizes?.XS > 0 ? <SizeButton>{t("xs")}</SizeButton> : null}
              {sizes?.S > 0 ? <SizeButton>{t("s")}</SizeButton> : null}
              {sizes?.M > 0 ? <SizeButton>{t("m")}</SizeButton> : null}
              {sizes?.L > 0 ? <SizeButton>{t("l")}</SizeButton> : null}
              {sizes?.XL > 0 ? <SizeButton>{t("xl")}</SizeButton> : null}
              {sizes?.XXL > 0 ? <SizeButton>{t("xxl")}</SizeButton> : null}
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
              <ProductCountButton />
              <Button theme="dark" className="m-0 bg-black text-white">
                {t("addToCart")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
