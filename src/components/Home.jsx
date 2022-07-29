import React from "react";
import { useSelector } from "react-redux";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";
export const Home = ()=>{
    const {token} = useSelector(state=>state.Login);
    console.log(token);
    return(
        token!==null?<h1>Home</h1> : <Navigate to="/login"/>
    )
}