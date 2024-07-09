"use server";

const BASE_URL = process.env.BASE_URL;

export const getProducts = async (query) => {
  const res = await fetch(`${BASE_URL}/products?${query}`, {
    cache: "no-store",
  });
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

export const getHappyComments = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const happyComments = [];

  data.forEach((product) => {
    if (product.comments && product.comments.length > 0) {
      product.comments.forEach((comment) => {
        if (comment.rating === 5) {
          happyComments.push(comment);
        }
      });
    }
  });

  return happyComments;
};

export const getNewArrivals = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const newArrivals = data.filter((product) => product.new_arrival === true);

  return newArrivals;
};

export const getTopSelling = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const topSelling = data.filter((product) => product.top_selling === true);

  return topSelling;
};

export const getMightLike = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const data = await res.json();
  const mightLike = data.slice(0, 4);

  return mightLike;
};
