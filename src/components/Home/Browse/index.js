import DressCard from "./DressCard";

const Browse = () => {
  return (
    <main className="container-xl bg-body-secondary py-5 rounded-5 px-5">
      <h2 className="text-center">BROWSE BY DRESS STYLE</h2>
      <div className="row mt-5">
        <DressCard col={4} title="casual" />
        <DressCard col={8} title="formal" />
        <DressCard col={8} title="party" />
        <DressCard col={4} title="gym" />
      </div>
    </main>
  );
};

export default Browse;
