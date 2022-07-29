import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../Redux/login/action";
import { logout } from "../Redux/login/action";
export const Navbar = ()=>{
    const {token} = useSelector(state=>state.Login);
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        console.log("invoked")
        dispatch(logout());
    }
    return(
        <div className="navbar">
            <div>Navbar</div>

        <div>
        <Link to={"/"}>Home</Link>
        {
            token===null?<Link to={"/login"}>Login</Link>: <span onClick={()=>handleLogout()}>Logout</span>
        }
        
        </div>

        </div>
    )
}