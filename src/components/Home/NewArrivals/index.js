import ShowCase from "@/components/ShowCase";
import { getNewArrivals } from "@/lib/server";

const NewArrivals = async () => {
  const data = await getNewArrivals();

  return (
    <div className="border-bottom">
      <ShowCase title="New Arrivals" button cards={data} />
    </div>
  );
};

export default NewArrivals;
