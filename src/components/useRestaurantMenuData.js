import { MENU_URL } from "../utils/constants";
import {useState,useEffect} from "react";
export const useRestaurantMenuData = (resId) =>{
    const [menu,setmenu] = useState([]);
    useEffect(()=>{
        fetchmenu(resId);
        // console.log(menu);
    },[])
    const fetchmenu = async(id) =>{
        try {
            const data = await fetch(MENU_URL + id);
            const json = await data.json();
            setmenu(json.data);
        } catch (error) {
            console.log(error);
        }
    }
    return menu;
}