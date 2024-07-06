import Image from "next/image";
import { Container, H1 } from "./styles";
import homebanner from "@/assets/images/home-banner.png";
import bigvector from "@/assets/images/big-vector.png";
import smallvector from "@/assets/images/small-vector.png";

const HomeBanner = () => {
  return (
    <section className="position-relative">
      <Image
        src={homebanner}
        alt="Home Banner"
        fill
        quality={100}
        priority
        className="object-fit-cover"
      />
      <Container className="container position-relative">
        <div className="row">
          <div className="col-6">
            <H1>FIND CLOTHES THAT MATCHES YOUR STYLE</H1>
            <p className="text-gray">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="btn btn-dark py-2 px-5 rounded-pill">
              Shop Now
            </button>
            <div className="mt-5 d-flex gap-4">
              <div className="border-end pe-5">
                <span className="fs-1 fw-bold">200+</span>
                <p>International Brands</p>
              </div>
              <div className="border-end pe-5">
                <span className="fs-1 fw-bold">2,000+</span>
                <p>High-Quality Products</p>
              </div>
              <div>
                <span className="fs-1 fw-bold">30,000+</span>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="col-6 position-relative">
            <div className="position-absolute bottom-50">
              <Image src={smallvector} alt="Small Vector" />
            </div>
            <div className="position-absolute start-100">
              <Image src={bigvector} alt="Big Vector" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
