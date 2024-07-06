import DressCard from "./DressCard";

import casual from "@/assets/images/dress/casual.png";
import formal from "@/assets/images/dress/formal.png";
import party from "@/assets/images/dress/party.png";
import gym from "@/assets/images/dress/gym.png";

const Browse = () => {
  return (
    <main className="container-xl bg-body-secondary py-5 rounded-5 px-5">
      <h2 className="text-center">BROWSE BY DRESS STYLE</h2>
      <div className="row mt-5">
        <DressCard col={4} title="casual" src={casual} />
        <DressCard col={8} title="formal" src={formal} />
        <DressCard col={8} title="party" src={party} />
        <DressCard col={4} title="gym" src={gym} />
      </div>
    </main>
  );
};

export default Browse;
