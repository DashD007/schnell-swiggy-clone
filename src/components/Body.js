import useRestaurantsData  from "./useRestaurantsData";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import {useContext} from "react";
import {UserContext} from "../utils/UserContext";

const Body = () =>{
    const [SearchText,setSearchText] = useState("");
    const [Restaurants,setRestaurants] = useState([]);
    const [FilterRestaurants,setFilterRestaurants] = useState([]);
    
    const data = useRestaurantsData();

    const {loggedInUser,setUserName} = useContext(UserContext);
    
    useEffect(()=>{
        setRestaurants(data);
        setFilterRestaurants(data);
    },[data])
    
    return Restaurants.length == 0 ? (<h1 className="absolute top-20">Loading</h1>) :(
        <main className="py-5 flex flex-col items-center absolute top-20 min-w-[1000px]">
            <div className="flex gap-4">
                
                <input className="border border-gray-500 px-3 py-2 text-sm rounded-full" type="text" placeholder="Search Here..." value={SearchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="rounded-full w-12 h-12 bg-gray-300" onClick={()=>{
                    list = Restaurants.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    setFilterRestaurants(list)
                }}>Search</button>
            </div>
            <div className="flex m-6 w-4/5 px-3">
                <button onClick={()=>{
                    list = Restaurants.filter((res) => res.info.avgRating >=4);
                    setFilterRestaurants(list);
                }} className="bg-gray-300 rounded-lg px-4 py-2 self-start" >Top Rated Restaurants</button>
            </div>


            <div className="restaurant-container m-auto w-4/5 min-w-[1000px]">
                <div className="grid grid-cols-4 gap-x-5 gap-y-5">
                    {FilterRestaurants.map((restaurant)=>{
                        return <Link key={restaurant.info.id} to={"menu/"+restaurant.info.id}><RestaurantCard  resData={restaurant.info}/></Link>
                    })}
                </div>
            </div>
        </main>
    )
}

export default Body;