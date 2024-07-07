import Image from "next/image";

import imagemain from "@/assets/images/detail/detail-image-main.png";
import image1 from "@/assets/images/detail/detail-image-1.png";
import image2 from "@/assets/images/detail/detail-image-2.png";
import image3 from "@/assets/images/detail/detail-image-3.png";

const ImagesContainer = () => {
  return (
    <div className="container ps-0">
      <div className="row">
        <div className="col-4 d-flex flex-column gap-3 ps-0">
          <Image src={image1} alt="product" className="img-fluid" />
          <Image src={image2} alt="product" className="img-fluid" />
          <Image src={image3} alt="product" className="img-fluid" />
        </div>
        <div className="col-8 position-relative">
          <Image
            src={imagemain}
            alt="product"
            className="obejct-fit-cover img-fluid"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesContainer;
