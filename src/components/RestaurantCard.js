import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cloudinaryImageId,locality,costForTwo,cuisines,avgRating,sla} = resData;
    
    
    return (
        <div className="p-3 w-[100%] flex flex-col gap-4 hover:scale-95 transition-all">
            <div className="restaurant-image-container">
                <img className="w-[100%] h-[150px] rounded-2xl object-cover items-center" src={CDN_URL +cloudinaryImageId} alt="this is restaurant image"/>
            </div>
            <div className="restaurant-info-container">
                <p className="text-lg font-bold">{name}</p>
                <p className="text-md font-bold">⭐ {avgRating} - {sla.slaString}</p>
                <p>{costForTwo}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
                
            </div>
        </div>
    )
}

export default RestaurantCard ;