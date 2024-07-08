import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/detail/image-1.png",
  },
  {
    id: 2,
    src: "/images/detail/image-2.png",
  },
  {
    id: 3,
    src: "/images/detail/image-3.png",
  },
];

const ImagesContainer = ({ productImage }) => {
  return (
    <div className="container ps-0">
      <div className="row">
        <div className="col-4 d-flex flex-column gap-3 px-0">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="product"
              className="img-fluid"
              width={150}
              height={150}
            />
          ))}
        </div>
        <div className="col-8 position-relative">
          <Image
            src={`/images/wears/${productImage}.png`}
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
