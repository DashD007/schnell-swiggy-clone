import MenuItems from "./MenuItems";
import { UseDispatch, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart())
    }
    return (
    <div className="absolute top-32 flex flex-col items-center justify-center gap-7">
        <p className="text-xl font-bold">Cart</p>
        <button className="border border-none bg-gray-600 text-white px-5 py-2 rounded-lg" onClick={handelClearCart}>Clear Cart</button>
        <div className="">
            {items.map((item)=>{return <MenuItems item={item}/>})}
        </div>
    </div>)
}

export default Cart;