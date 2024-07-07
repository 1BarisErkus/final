import ShowCase from "@/components/ShowCase";
import { getTopSelling } from "@/lib/server";

const TopSelling = async () => {
  const data = await getTopSelling();

  return <ShowCase title="Top Sellers" button cards={data} />;
};

export default TopSelling;
