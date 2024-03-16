import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handelClearcart = () => {
        dispatch(clearCart());
    }
  return (
    <div className="mt-[80px] max-w-[1180px] mx-auto">
      <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">CART</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handelClearcart}>
                Clear Cart
    if(cartItems.length==0)
            </button>
            {cartItems.length === 0 && (<h1>Cart is Empty .Add items to the cart</h1>)}
            <ItemList items={cartItems}></ItemList>
        </div>
      </div>
    </div>
  );
};

export default Cart;
