import Button from "@/components/Button";
import { MdOutlineDiscount } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { useTranslations } from "next-intl";

const Right = () => {
  const t = useTranslations("Cart");
  return (
    <div className="border rounded-4 p-4">
      <h5 className="fs-4 fw-bold mb-4">{t("orderSummary")}</h5>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("subtotal")}</p>
          <p className="fs-5 mb-0 fw-bold">$145</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("discount")}</p>
          <p className="fs-5 mb-0 fw-bold text-danger">-$113</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("deliveryFree")}</p>
          <p className="fs-5 mb-0 fw-bold">$10</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-5 mb-0">{t("total")}</p>
        <p className="fs-3 mb-0 fw-bold">$155</p>
      </div>
      <form>
        <div className="d-flex position-relative flex-grow-1">
          <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
            <MdOutlineDiscount size={24} color="gray" />
          </span>
          <input
            className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
            type="text"
            placeholder={t("couponCode")}
          />
        </div>
        <Button
          theme="dark"
          className="rounded-pill d-flex text-center align-items-center justify-content-center ms-auto my-3"
        >
          {t("apply")}
        </Button>
      </form>
      <Button theme="dark" className="w-100 my-3">
        {t("gotoCheckout")} <BiSolidRightArrow className="ms-2" />
      </Button>
    </div>
  );
};

export default Right;
