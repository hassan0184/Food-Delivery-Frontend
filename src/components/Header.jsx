import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between p-5 bg-slate-300 ">
      <div className="logo-container">
        <img
          className="w-20"
          src="https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            Online Status: {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold bg-slate-200 rounded-lg p-1">
            <Link to="/cart">🛒 ({cartItems.length})</Link>
          </li>
          <li className="px-4 font-semibold">{loggedInUser}</li>
          <button
            className="bg-black px-4 py-1 rounded-lg text-white w-20"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
