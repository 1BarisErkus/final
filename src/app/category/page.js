import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";

const CategoryPage = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb />
            <Category />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
