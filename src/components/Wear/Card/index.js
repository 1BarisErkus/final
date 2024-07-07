import { Rating } from "@smastrom/react-rating";
import {
  Card,
  CardTitle,
  DiscountlessPrice,
  DiscountPercent,
  Price,
  StyledImage,
} from "./styles";

const WearCard = ({ src, title, price, discount = null }) => {
  const discountlessPrice = discount ? price + price * (discount / 100) : 0;

  return (
    <Card className="card">
      <StyledImage src={src} className="" alt="Wear" />
      <div className="card-body px-0">
        <CardTitle className="card-title p-0">{title}</CardTitle>
        <Rating style={{ maxWidth: 100 }} value={0} className="my-2" readOnly />
        <div className="d-flex align-items-center">
          <Price>${price}</Price>
          {discount && (
            <>
              <DiscountlessPrice>${discountlessPrice}</DiscountlessPrice>
              <DiscountPercent>{discount}%</DiscountPercent>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default WearCard;
