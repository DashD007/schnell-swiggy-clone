import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const MenuItems = (props) =>{
    const {item,showbutton} = props;
    const {name,imageId,price,defaultPrice,description} = item?.card?.info;

    const dispatch = useDispatch();

    const handelAddItem = () => {
        dispatch(addItem(item));
    };

    return(
        <div className="flex justify-between gap-3 pb-6 mb-3 border-gray-300 border-b-2">
            <div className="w-3/4">
                <p className="font-bold text-md">{name}</p>
                <p className="text-sm">- ₹{price ? price/100 : defaultPrice/100}</p>
                <p className="text-gray-400 text-xs" >{description}</p>
            </div>
            <div className="w-[90px]">
                <img className="rounded-lg object-cover bg-center" src={ITEM_URL + imageId} alt="item image"/>
                {
                    showbutton &&
                    <button className="relative -top-6 left-3 rounded-lg py-1 px-4 bg-white border border-gray-400 text-green-500 text-xs font-bold" onClick={()=>handelAddItem(item)}>ADD</button>
                }
            </div>
        </div>
    )
}

export default MenuItems;