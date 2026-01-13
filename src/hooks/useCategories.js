import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/api";

// export const useCategories = () => {
//   return useQuery({
//     queryKey: ["categories"],
//     queryFn: getCategories,
//     staleTime: 1000 * 60 * 5, // 5 minutes
//     keepPreviousData: true, // 👈 KEY
//   });
// };

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await getCategories();
      localStorage.setItem("categories", JSON.stringify(data));
      return data;
    },
    initialData: () => {
      const cached = localStorage.getItem("categories");
      return cached ? JSON.parse(cached) : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
};
