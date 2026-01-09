function CategorySkeleton() {
  return (
    <div className="w-full mt-2 bg-white pb-2">
      <div className="h-10 bg-gray-200 animate-pulse mx-3 my-2 rounded" />
      <div className="flex gap-2 px-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-40 h-56 bg-gray-200 animate-pulse rounded"
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySkeleton;
