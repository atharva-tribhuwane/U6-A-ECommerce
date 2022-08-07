import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../Redux/login/action";
import { logout } from "../Redux/login/action";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Cart} from "./Cart"
export const Navbar = ()=>{
    const {token} = useSelector(state=>state.Login);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogout = ()=>{
        console.log("invoked")
        dispatch(logout());
    }
    return(
        <div className="navbar">
            <div>Ecommerce Assignment</div>
            {
                token !== null? <div style={{marginLeft:"40%"}}><div onClick={()=>navigate("/")}>Groceries</div><div>Pharmacy</div></div>: <div></div>
            }
        <div>
        <Link to={"/"} style={{marginRight:"13%", color:"white", textDecoration:"none"}}>Home</Link>
        {
            token===null?<Link to={"/login"}>Login</Link>: <span onClick={()=>handleLogout()}>Logout</span>
        }
        {
            token!==null?<Link to={"/cart"} style={{marginLeft:"5%", textDecoration:"none", cursor:"pointer", color:"white"}}>Cart</Link>: <></>
        }
        
        </div>

        </div>
    )
}