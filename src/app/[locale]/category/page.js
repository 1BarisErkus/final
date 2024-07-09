import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";
import { useTranslations } from "next-intl";

const CategoryPage = () => {
  const b = useTranslations("Breadcrumb");
  return (
    <main>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Breadcrumb path={[b("home"), b("category")]} />
            <Category />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
