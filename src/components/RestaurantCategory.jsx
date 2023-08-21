import ItemCard from "./ItemCard";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const toggleAccordian = () => {
    setShowIndex();
  };
  return (
    <>
      <div className="w-6/12 p-4 mx-auto my-3 shadow-md cursor-pointer bg-slate-300 m-2 rounded-md">
        <div
          onClick={toggleAccordian}
          className="flex justify-between transition-all "
        >
          <span className="font-semibold text-lg">
            {category?.title} ({category?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && (
          <ItemCard key={category.title} itemList={category.itemCards} />
        )}
      </div>
    </>
  );
};

export default RestaurantCategory;
