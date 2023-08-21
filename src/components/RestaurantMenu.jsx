import Shimmer from "./Shimmer";
import { useParams } from "../../node_modules/react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  let a = {};

  if (
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards == undefined
  )
    a =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
  else
    a =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
  const { itemCards } = a;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <p className="font-bold m-6 text-4xl">{name}</p>
      <p className="font-semibold m-3">
        {cuisines.join(", ")} - Starting from Rs - {costForTwo / 100}
      </p>

      {categories.map((c, index) => (
        <div className="menu-container" key={index}>
          <RestaurantCategory
            key={c?.card?.card.title}
            category={c?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              index === showIndex ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
