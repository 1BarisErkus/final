import Breadcrumb from "@/components/Breadcrumb";
import Cart from "@/components/Cart";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("Cart");
  const b = useTranslations("Breadcrumb");
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb path={[b("home"), b("cart")]} />
            <h1>{t("yourCart")}</h1>
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
