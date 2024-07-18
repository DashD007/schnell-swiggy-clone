import { API_URL } from "../utils/constants";
import {useState,useEffect} from "react";


const useRestaurantsData = () => {
    const [RestaurantList, setRestaurantList] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        try {
            const data = await fetch(API_URL);
            const json = await data.json();
            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log(error);
        }
    }
    return RestaurantList;
}

export default useRestaurantsData;
