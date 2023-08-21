const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    //
    <div
      data-testid="resCard"
      className="w-80 flex  hover:transition-all transition-all justify-center "
    >
      {/*  hover:drop-shadow-lg */}
      <div className=" p-3 border rounded-lg   border-transparent duration-100 transition-all ease-in-out">
        <img
          className=" rounded-3xl shadow-xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <div className="p-3 rounded-lg ">
          <h3 className="font-medium text-lg">{name}</h3>
          <h5 className="font-light text-base">{cuisines.join(", ")}</h5>
          <h5 className="font-light text-base">{avgRating} stars</h5>
          <h5 className="font-light text-base">{deliveryTime} minutes</h5>
          <h5 className="font-light text-base m-1">
            Starting from Rs {costForTwo / 100}
          </h5>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="relative">
          <div className="absolute top-[0.80rem] left-[0.1rem]">
            <label
              className="z-10 bg-amber-400 absolute shadow-md  text-white px-3 pb-0.5 rounded-br-md rounded-tl-md  "
              htmlFor=""
            >
              Promoted
            </label>
            <div className="z-0 absolute border-[6px] top-[1.23rem] skew-y-[40deg] border-solid border-amber-500"></div>
          </div>
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};

export default RestaurantCard;
