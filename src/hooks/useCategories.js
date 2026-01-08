import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/api";
// get categories

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const categories = await getCategories();
        return categories ?? []; // ✅ always return array
      } catch (error) {
        console.error("Categories fetch failed:", error);
        return [];
      }
    },
  });
};
