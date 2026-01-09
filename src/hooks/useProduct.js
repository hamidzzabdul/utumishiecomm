import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductById, getProductBySlug } from "../api/api";

const mapPriceRanges = (ranges) => {
  let min_price, max_price;

  ranges.forEach((range) => {
    if (range === "under5k") max_price = 5000;
    if (range === "5kto10k") {
      min_price = 5000;
      max_price = 10000;
    }
    if (range === "10kto20k") {
      min_price = 10000;
      max_price = 20000;
    }
    if (range === "over20k") min_price = 20000;
  });

  return { min_price, max_price };
};

// export const useProducts = (params) => {
//   const { price_ranges, ...rest } = params;
//   const priceParams = mapPriceRanges(price_ranges || []);

//   return useQuery({
//     queryKey: ["products", params],
//     queryFn: () =>
//       getProducts({
//         ...rest,
//         ...priceParams,
//       }),
//     keepPreviousData: true,
//   });
// };

export const useProducts = (params) => {
  const { price_ranges, ...rest } = params;
  const priceParams = mapPriceRanges(price_ranges || []);

  const finalParams = {
    ...rest,
    ...priceParams,
  };

  return useQuery({
    queryKey: ["products", finalParams], // ✅ stable & correct
    queryFn: () => getProducts(finalParams),
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

export const useProductHome = (params) => {
  return useQuery({
    queryKey: ["product", params],
    queryFn: async () => {
      const data = await getProducts({ per_page: 15, ...params });
      return data; // should be an array of products
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductBySlug = (slug) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug, // only fetch if slug exists
    staleTime: 1000 * 60 * 5,
    keepPreviousData: false, // don't show old product
  });
};
