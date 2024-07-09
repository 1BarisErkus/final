"use server";
const BASE_URL = process.env.BASE_URL;

export const addUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
};

export const getUser = async (id) => {
  const res = await fetch(`${BASE_URL}/users?id=${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data[0];
};
