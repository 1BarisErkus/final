"use server";
import { revalidatePath } from "next/cache";
import { getProduct, updateProduct } from "./product";
import { getUser } from "./user";
const BASE_URL = process.env.BASE_URL;

export const updateDbCart = async (userId, cart, type, count = 1) => {
  const user = await getUser(userId);
  user.cart = cart;

  const updatePromises = cart.map(async (item) => {
    const product = await getProduct(item.productId);
    if (type === "add") {
      product.stock -= count;
    } else if (type === "delete") {
      product.stock += count;
    } else if (type === "inc") {
      product.stock += 1;
    } else if (type === "desc") {
      product.stock -= 1;
    }

    await updateProduct(product);
  });

  await Promise.all(updatePromises);

  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.status !== 200) {
    throw new Error("Failed to update cart");
  }

  revalidatePath("/cart");

  const data = await res.json();
  return data;
};
