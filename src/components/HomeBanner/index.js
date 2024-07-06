import Image from "next/image";
import {
  Button,
  Container,
  H1,
  Paragraph,
  StatsItem,
  StatsNum,
  StatsParagraph,
  StatsWrapper,
} from "./styles";
import homebanner from "@/assets/images/homebanner/home-banner.png";
import smallhomebanner from "@/assets/images/homebanner/small-home-banner.png";
import bigvector from "@/assets/images/homebanner/big-vector.png";
import smallvector from "@/assets/images/homebanner/small-vector.png";

const HomeBanner = () => {
  return (
    <section className="position-relative py-5">
      <Image
        src={homebanner}
        alt="Home Banner"
        fill
        quality={100}
        priority
        className="object-fit-cover"
      />
      <Container className="container">
        <div className="position-relative">
          <div className="col-xl-6 px-3">
            <H1>FIND CLOTHES THAT MATCHES YOUR STYLE</H1>
            <Paragraph className="text-gray">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Paragraph>
            <Button className="btn btn-dark py-2 px-5 rounded-pill">
              Shop Now
            </Button>
            <StatsWrapper className="d-flex flex-wrap">
              <StatsItem>
                <StatsNum>200+</StatsNum>
                <StatsParagraph>International Brands</StatsParagraph>
              </StatsItem>
              <StatsItem>
                <StatsNum>2,000+</StatsNum>
                <StatsParagraph>High-Quality Products</StatsParagraph>
              </StatsItem>
              <StatsItem>
                <StatsNum>30,000+</StatsNum>
                <StatsParagraph>Happy Customers</StatsParagraph>
              </StatsItem>
            </StatsWrapper>
          </div>
          {/* <div className="position-absolute bottom-50 start-50">
            <Image
              src={smallvector}
              alt="Small Vector"
              width={50}
              height={50}
            />
          </div>
          <div className="position-absolute start-100">
            <Image src={bigvector} alt="Big Vector" width={50} height={50} />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
