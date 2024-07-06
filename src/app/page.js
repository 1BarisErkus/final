import Brands from "@/components/Home/Brands";
import HomeBanner from "@/components/Home/Hero";
import NewArrivals from "@/components/Home/NewArrivals";
import TopSelling from "@/components/Home/TopSelling";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Brands />
      <NewArrivals />
      <TopSelling />
    </main>
  );
}
