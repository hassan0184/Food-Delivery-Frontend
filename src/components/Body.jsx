import RestaurantCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
import { useContext } from "../../node_modules/react";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [rest, filteredRest, setRest, setFilteredRest] = useRestaurants([]);

  const ResCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (useOnlineStatus() === false)
    return <h1>Looks like your device is offline</h1>;

  return rest === [] ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center my-5">
        <div className=" w-4r0 ">
          <input
            className="border rounded-lg  p-2 "
            type="text"
            data-testid="searchInput"
            id="inp"
            placeholder="Search"
            required
          />
        </div>
        <button
          className="p-2 border bg-slate-300 border-solid mx-10 rounded-lg"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const resNameFilter = document.getElementById("inp").value;
            const nameFilteredList = rest.filter((res) => {
              if (
                res.info.name
                  .toLowerCase()
                  .includes(resNameFilter.toLowerCase())
              ) {
                return res;
              }
            });
            // filteredRest = nameFilteredList;
            setFilteredRest(nameFilteredList);
          }}
        >
          🔍
        </button>

        <div className=" w-40 ">
          <input
            className="border rounded-lg  p-2 "
            type="text"
            id="inp"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <button
          className="p-2 border bg-slate-300 border-solid mx-10 rounded-lg"
          type="submit"
        >
          Search
        </button>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="w-60 p-3 m-1 border-solid rounded-lg bg-slate-300"
          data-testid="topRatedBtn"
          onClick={() => {
            const filteredList = rest.filter((res) => res.info.avgRating > 4.0);
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="w-60 p-3 m-1 rounded-lg bg-slate-300"
          onClick={() => {
            setFilteredRest(rest);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="flex justify-center my-5 flex-wrap">
        {filteredRest.map((res) => {
          return (
            <Link
              className="resCardLink"
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
            >
              {res.info.promoted ? (
                <ResCardPromoted resData={res.info} />
              ) : (
                <RestaurantCard resData={res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
