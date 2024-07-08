import Breadcrumb from "@/components/Breadcrumb";
import Cart from "@/components/Cart";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("Cart");
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb />
            <h1>{t("yourCart")}</h1>
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
