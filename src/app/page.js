import Brands from "@/components/Home/Brands";
import Browse from "@/components/Home/Browse";
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
      <Browse />
    </main>
  );
}
