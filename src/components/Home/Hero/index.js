import Image from "next/image";
import { Container } from "./styles";
import Content from "./Content";

const HomeBanner = () => {
  return (
    <section className="position-relative py-5">
      <Image
        src="/images/homebanner/home-banner.png"
        alt="Home Banner"
        fill
        quality={100}
        priority
        className="object-fit-cover"
      />
      <Container className="container">
        <div className="position-relative">
          <div className="col-xl-6 px-3">
            <Content />
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
