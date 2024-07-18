import {useRestaurantMenuData} from "./useRestaurantMenuData";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";
const RestaurantMenu = () =>{
    const [showItems,setshowItems] = useState(null);
    const {id} = useParams();
    
    const data = useRestaurantMenuData(id);

    if(data.length==0){
        return <div>loading..</div>
    }
    // console.log(data)
    const {name,city,costForTwoMessage,cuisines} = data?.cards[2]?.card?.card?.info;
    const categories = data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return (
        <div className="absolute top-20 flex justify-center w-[100%]">
            <div className="w-2/4 min-w-[800px] py-4">
                <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-sm">{cuisines.join(", ")} - {costForTwoMessage}</p>
                    <p className="text-sm">{city}</p>
                    <hr className="my-5"/>
                </div>
                <div>
                    {categories.map((category, index) => {
                        return <RestaurantCategory key={category.card.card.title} info={category} showItems={index == showItems ? true : false}  setshowItems={() => setshowItems(index)}/>
                    })}
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;