import React, { useEffect,useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import {UserContext} from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () =>{
    const [UserName,setUserName]  = useState();

    useEffect(()=>{
        const data = {
            name:"Akhsay saini",
        };
        setUserName(data.name)
    },[])

    return (
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser:UserName ,setUserName}}>
                    <div>
                        <Header/>
                        <Outlet/>
                    </div>
                </UserContext.Provider>  
            </Provider>
    )
}

const routeConf = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:"/menu/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
]);


const root =  ReactDom.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={routeConf} />);