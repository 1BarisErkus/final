import StarRating from "../../StarRating";
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
        <StarRating className="my-2" />
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
