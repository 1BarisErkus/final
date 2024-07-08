import { Rating } from "@smastrom/react-rating";
import {
  Card,
  CardTitle,
  DiscountlessPrice,
  DiscountPercent,
  Price,
  StyledImage,
} from "./styles";

const WearCard = ({ src, title, price, discount = 0 }) => {
  const discountlessPrice = discount !== 0 ? price / (1 - discount / 100) : 0;

  return (
    <Card className="card">
      <StyledImage
        src={`/images/wears/${src}.png`}
        className="object-fit-cover"
        alt="Wear"
        width={300}
        height={300}
        priority
      />
      <div className="card-body px-0">
        <CardTitle className="card-title p-0">{title}</CardTitle>
        <Rating style={{ maxWidth: 100 }} value={0} className="my-2" readOnly />
        <div className="d-flex align-items-center">
          <Price>${price}</Price>
          {discount !== 0 && (
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
