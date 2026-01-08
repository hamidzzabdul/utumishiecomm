import axios from "axios";

const BASE_URL = "https://utumishicomputerslimited.com/wp-json/wc/v3";
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
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axiosInstance.get("/products/categories?per_page=20");
  return response.data;
};
