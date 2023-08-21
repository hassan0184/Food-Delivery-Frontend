import { useState, useEffect } from "react";
import { RES_DATA } from "./contants";
const useRestaurants = () => {
  const [rest, setRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //   return rest;
  return [rest, filteredRest, setRest, setFilteredRest];
};
export default useRestaurants;
