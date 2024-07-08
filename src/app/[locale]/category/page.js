import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";

const CategoryPage = () => {
  return (
    <main>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Breadcrumb />
            <Category />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
