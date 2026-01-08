import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductById, getCategories } from "../api/api";

export const useProducts = (params = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 5,
  });
};
