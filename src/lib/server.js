"use server";

import { revalidatePath } from "next/cache";

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

export const addComment = async (productId, values) => {
  const product = await getProduct(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const newComment = {
    id: String(new Date().getTime()),
    user_id: "123",
    content: values.content,
    rating: values.rating,
    created_at: new Date().toISOString(),
  };

  const updatedComments = [...product.comments, newComment];

  const res = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...product, comments: updatedComments }),
  });

  revalidatePath("/product/[id]", "page");

  return res;
};
