import Content from "./Content";
import Details from "./Details";
import ImagesContainer from "./ImagesContainer";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ImagesContainer />
        </div>
        <div className="col-6">
          <Content />
        </div>
        <Details />
      </div>
    </div>
  );
};

export default ProductDetail;
