import { getMightLike, getProduct } from "@/lib/server";
import ShowCase from "../ShowCase";
import Content from "./Content";
import Details from "./Details";
import ImagesContainer from "./ImagesContainer";
import { getTranslations } from "next-intl/server";

const ProductDetail = async ({ slug }) => {
  const data = await getMightLike();
  const product = await getProduct(slug);
  const comments = product.comments;
  const t = await getTranslations("ProductDetail");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ImagesContainer productImage={product.image} />
        </div>
        <div className="col-6">
          <Content
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description}
            stock={product.stock}
            sizes={product.sizes}
            color={product.color}
            comments={product.comments}
            rating={product.rating}
          />
        </div>
        <Details comments={comments} />
        <ShowCase title={t("youMightAlsoLike")} cards={data} />
      </div>
    </div>
  );
};

export default ProductDetail;
