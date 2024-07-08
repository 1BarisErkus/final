import Breadcrumb from "@/components/Breadcrumb";
import ProductDetail from "@/components/ProductDetail";

const ProductDetailPage = ({ params }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb />
            <ProductDetail slug={params.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
