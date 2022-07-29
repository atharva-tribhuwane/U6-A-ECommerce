import React from "react";
import { useState } from "react";

export const Login = ()=>{
    const [token,setToken] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleAdd = ()=>{
        let payLoad = {
            email:username,
            password:password
        }
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(payLoad),
            headers:{
                "Content-Type":"application/json"
            }
        })
         .then((res)=>res.json())
         .then((res)=>console.log("token:",res))
         .catch((error)=>console.log(error))
         
    }

    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Enter Usename" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>handleAdd()}>Login</button>
        </>
    )
}