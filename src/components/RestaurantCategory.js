import { useState } from "react";
import MenuItems from "./MenuItems";
const RestaurantCategory = (props) =>{
    const {info, showItems ,setshowItems} = props;
    const {title , itemCards} = info?.card?.card;
    return (
        <div className=" px-5 py-3 rounded-md m-3 cursor-pointer border-gray-300 border-b-2">
            <div className=" flex justify-between mb-4" onClick={()=>{setshowItems();}}>
            <p className="font-bold">{title} ({itemCards?.length})</p> 
            <p>{showItems ? "⬆️":"⬇️"}</p>
            </div>
            <div>
                {showItems?
                    itemCards.map((itemcard)=>{
                        return <MenuItems key={itemcard.card.info.id} item={itemcard} showbutton/>
                    }) : null 
                }
                
            </div>
        </div>
    )
}

export default RestaurantCategory;