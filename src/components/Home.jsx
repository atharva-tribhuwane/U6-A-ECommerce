import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";
import { Productcard } from "./Productcard";
import { products } from "../Redux/products/action";

export const Home = () => {
  const { token } = useSelector(state => state.Login);
  console.log(token);
  const [products, setProducts] = useState({
    loading: false,
    error: false,
    data: []
  })
  const getData = () => {
    setProducts(prev => ({
      ...prev,
      loading: true
    }))
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(prev => ({
          ...prev,
          loading: false,
          data: res,
          error: false
        }))
      })
      .catch((error) => setProducts(prev => ({
        ...prev,
        loading: false,
        error: true
      })))
  }
  useEffect(() => {
    getData();

  }, [])

  return (
    // token!==null?<h1>Home</h1> : <Navigate to="/login"/>
    <div style={{display:"grid", gridTemplateColumns: "auto auto auto", gap:"58px", width:"75%", margin:"auto"}}>
      {
        token !== null ?
          products.loading ?
            <h1>Loading...</h1>
            : products.error
              ? <h1>Error</h1>
              : products.data.map((ele) => <Productcard key={ele.id} props={ele} style={{marginBottom:"15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} />) : <Navigate to="/login" />
      }
    </div>
  )
}