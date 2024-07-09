import Breadcrumb from "@/components/Breadcrumb";
import ProductDetail from "@/components/ProductDetail";
import { useTranslations } from "next-intl";

const ProductDetailPage = ({ params }) => {
  const b = useTranslations("Breadcrumb");
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb path={[b("home"), b("productDetail")]} />
            <ProductDetail slug={params.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
