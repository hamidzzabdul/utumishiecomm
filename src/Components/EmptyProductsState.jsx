function EmptyProductsState({ onReset }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-semibold text-gray-600">No products found</p>
      <p className="text-sm text-gray-500 mt-2">
        Try adjusting your filters or browse other categories.
      </p>

      {onReset && (
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
export default EmptyProductsState;
