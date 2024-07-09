import ShowCase from "@/components/ShowCase";
import { getTopSelling } from "@/lib/server/product";
import { getTranslations } from "next-intl/server";

const TopSelling = async () => {
  const data = await getTopSelling();
  const t = await getTranslations("Home");

  return <ShowCase title={t("topSellers")} button cards={data} />;
};

export default TopSelling;
