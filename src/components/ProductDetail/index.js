import { getMightLike, getProduct } from "@/lib/server";
import ShowCase from "../ShowCase";
import Content from "./Content";
import Details from "./Details";
import ImagesContainer from "./ImagesContainer";
import { getTranslations } from "next-intl/server";
import { calculateRating } from "@/lib/helpers";

const ProductDetail = async ({ slug }) => {
  const data = await getMightLike();
  const product = await getProduct(slug);
  const comments = product.comments;
  const t = await getTranslations("ProductDetail");

  const rating = calculateRating(comments);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-12">
          <ImagesContainer productImage={product.image} />
        </div>
        <div className="col-xl-6 col-12">
          <Content
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description}
            stock={product.stock}
            sizes={product.sizes}
            color={product.color}
            comments={product.comments}
            rating={rating}
          />
        </div>
        <Details comments={comments} productId={slug} />
        <ShowCase title={t("youMightAlsoLike")} cards={data} />
      </div>
    </div>
  );
};

export default ProductDetail;
