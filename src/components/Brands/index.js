import Image from "next/image";
import versace from "@/assets/images/brands/versace.png";
import zara from "@/assets/images/brands/zara.png";
import gucci from "@/assets/images/brands/gucci.png";
import prada from "@/assets/images/brands/prada.png";
import calvinklein from "@/assets/images/brands/calvin-klein.png";

const brands = [
  {
    id: 1,
    src: versace,
    alt: "Versace",
  },
  {
    id: 2,
    src: zara,
    alt: "Zara",
  },
  {
    id: 3,
    src: gucci,
    alt: "Gucci",
  },
  {
    id: 4,
    src: prada,
    alt: "Prada",
  },
  {
    id: 5,
    src: calvinklein,
    alt: "Calvin Klein",
  },
];

const Brands = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 bg-black py-5">
          <ul className="d-flex flex-wrap align-items-center justify-content-center gap-5 col-md:gap-1">
            {brands.map((brand) => (
              <li
                key={brand.id}
                className="col-md-4 col-lg-2 d-flex justify-content-center"
              >
                <Image src={brand.src} alt={brand.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
