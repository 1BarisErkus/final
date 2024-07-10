"use server";
import { revalidatePath } from "next/cache";
import { getProduct } from "./product";

const BASE_URL = process.env.BASE_URL;

export const addComment = async (productId, newComment) => {
  const product = await getProduct(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedComments = [...product.comments, newComment];

  const newProduct = { ...product, comments: updatedComments };

  const res = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  revalidatePath("/product/[id]", "page");

  return res.json();
};
