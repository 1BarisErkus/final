const BASE_URL = "http://localhost:3001";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();

  return data;
};

export const getProduct = async (slug) => {
  const res = await fetch(`${BASE_URL}/products?id=${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data[0];
};

export const getNewArrivals = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const newArrivals = data
    .filter((product) => product.new_arrival === true)
    .slice(0, 4);

  return newArrivals;
};

export const getTopSelling = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const topSelling = data
    .filter((product) => product.top_selling === true)
    .slice(0, 4);

  return topSelling;
};

export const getMightLike = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const mightLike = data.slice(0, 4);

  return mightLike;
};
