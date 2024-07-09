import ShowCase from "@/components/ShowCase";
import { getNewArrivals } from "@/lib/server";
import { getTranslations } from "next-intl/server";
import { StyledCardList } from "./styles";

const NewArrivals = async () => {
  const data = await getNewArrivals();
  const t = await getTranslations("Home");

  return (
    <StyledCardList id="newArrivals">
      <ShowCase title={t("newArrivals")} button cards={data} />
    </StyledCardList>
  );
};

export default NewArrivals;
