import axios from "axios";

const BASE_URL = "https://utumishicomputerslimited.com/wp/wp-json/wc/v3";
const CONSUMER_KEY = import.meta.env.VITE_WC_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WC_SECRET;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: CONSUMER_KEY,
    password: CONSUMER_SECRET,
  },
});

export const getProducts = async (params = {}) => {
  const response = await axiosInstance.get("/products", { params });

  return {
    products: response.data,
    total: Number(response.headers["x-wp-total"]),
    totalPages: Number(response.headers["x-wp-totalpages"]),
  };
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const getProductBySlug = async (slug) => {
  // WooCommerce allows filtering by slug
  const response = await axiosInstance.get("/products", {
    params: { slug },
  });
  // WooCommerce returns an array, get the first item
  return response.data[0];
};

export const getCategories = async () => {
  const response = await axiosInstance.get("/products/categories?per_page=20");
  return response.data;
};
