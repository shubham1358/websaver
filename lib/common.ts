import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const getBaseQuery = (path = "") => {
  const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

  if (!API_SERVER) {
    throw new Error("API_SERVER is not defined in the environment variables.");
  }
  return fetchBaseQuery({ baseUrl: `${API_SERVER}/${path}` });
};
