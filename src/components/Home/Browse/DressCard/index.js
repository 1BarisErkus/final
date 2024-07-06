import Image from "next/image";
import Link from "next/link";
import { StyledCard } from "./styles";

const DressCard = ({ col, title }) => {
  return (
    <Link href="#" className={`col-${col} text-decoration-none text-black`}>
      <StyledCard className="bg-white position-relative rounded-4 mb-3">
        <h3 className="z-2 position-relative pt-4 ps-4 fw-bold">{title}</h3>
        <Image
          src={`/images/dress/${title}.png`}
          alt={title}
          fill
          className="object-fit-cover rounded-4"
        />
      </StyledCard>
    </Link>
  );
};

export default DressCard;
