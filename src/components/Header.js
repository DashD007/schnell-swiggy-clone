import { Link } from "react-router-dom";
import {useState} from "react";
import {useContext} from "react";
import {UserContext} from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [Status, setStatus] = useState("Login");
    // const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)
    
    // console.log(cartItems)
    return (
        <header className="shadow-md fixed top-0 left-0 right-0 bg-white z-50">
            <nav className="flex justify-between px-9 items-center">
                <div className="logo-container w-28">
                    <img src="https://logowik.com/content/uploads/images/free-food-delivery8485.logowik.com.webp" alt="this is logo image"/>
                </div>
                <div className="nav-items">
                    <ul className="flex gap-4 list-none items-center">
                        <Link to='/'><li>Home</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/cart"><li>Cart ({cartItems.length} - items)</li></Link>
                        <li><button className="bg-red-500 text-white px-3 py-2 rounded-2xl" onClick={()=>{Status=="Login"? setStatus("Logout") : setStatus("Login")}}>{Status}</button></li>
                        {/* <li><p>{loggedInUser}</p></li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;