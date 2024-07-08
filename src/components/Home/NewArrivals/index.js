import ShowCase from "@/components/ShowCase";
import { getNewArrivals } from "@/lib/server";
import { getTranslations } from "next-intl/server";

const NewArrivals = async () => {
  const data = await getNewArrivals();
  const t = await getTranslations("Home");

  return (
    <div className="border-bottom" id="newArrivals">
      <ShowCase title={t("newArrivals")} button cards={data} />
    </div>
  );
};

export default NewArrivals;
