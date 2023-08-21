import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center m-4 p-4">
        <div className="font-bold text-2xl">Cart</div>
        <button
          onClick={handleClearCart}
          className="px-2 py-1 border-2 border-slate-300 text-white m-2 bg-slate-600 rounded-lg text-sm "
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your cart is empty. Add items to the cart.</h1>
        )}
      </div>
      <div className="w-6/12 m-auto text-center">
        <ItemCard key={cartItems.length} itemList={cartItems} />
      </div>
    </>
  );
};

export default Cart;
