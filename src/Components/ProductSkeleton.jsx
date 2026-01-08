function ProductSkeleton() {
  return (
    <div className="border border-gray-200 rounded-r-sm overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center"></div>

      {/* Content skeleton */}
      <div className="p-2 pb-2 flex flex-col gap-2">
        {/* SKU skeleton */}
        <div className="h-4 bg-gray-300 rounded w-20"></div>

        {/* Product name skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        </div>

        {/* Stock status skeleton */}
        <div className="flex items-center gap-2 mt-1">
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}
export default ProductSkeleton;
