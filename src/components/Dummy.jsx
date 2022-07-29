import React from "react";
import { useSelector } from "react-redux";

export const Dummy = ()=>{
        const {token} = useSelector(store=>store.Login);
        console.log("token::::",token);
        return(
            token===null?<h1>Go LOgin First</h1>: <h1>Hello {token.token} How Are YYou</h1>
        )
}