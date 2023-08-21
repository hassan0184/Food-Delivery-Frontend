import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/contants";

const ItemCard = ({ itemList }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div>
        {itemList.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className=" border-b-2 border-slate-500 m-2 p-2 text-left flex justify-between"
          >
            <div className="p-2 w-[75%] ">
              <span>{item.card.info.name}</span>
              <span>
                <span className="text-xs"> - Rs </span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className=" w-[20%] relative">
              <div className="left-[10%] top-[75%] h-auto absolute">
                <button
                  className=" w-28 h-6 text-sm rounded-md top-0 text-amber-500 font-semibold bg-white shadow-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                className="rounded-xl"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  item.card.info.imageId
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
