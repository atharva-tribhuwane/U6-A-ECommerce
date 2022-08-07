import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";
import { Productcard } from "./Productcard";
import { Button } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Home = () => {
  const [page, setPage] = useState(1);
  const { token } = useSelector(state => state.Login);
  console.log(token);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");

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
    const query = `http://localhost:3001/products?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`;
    console.log(query)
    fetch(`http://localhost:3001/products?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(prev => ({
          ...prev,
          loading: false,
          data: res,
          error: false
        }))
        // console.log(res)
      })
      .catch((error) => setProducts(prev => ({
        ...prev,
        loading: false,
        error: true
      })))
  }

  
  useEffect(() => {
    getData();

  }, [page,sort,order])

  return (
    <>
    {/* {token!==null?<h1>Home</h1> : <Navigate to="/login"/>} */}
    <div>
      
      <div>
        <Button variant={sort === "lowtohigh"?"contained":"outlined"} onClick={() => {setOrder("asc"); setSort("price")}} style={{ margin: "2%" }}>Low To High</Button>

        <Button variant={sort === "hightolow"?"contained":"outlined"} onClick={() =>  {setOrder("desc"); setSort("price")}} style={{ margin: "2%" }}>High TO Low</Button>

        {/* <Button variant={sort === "hightolow"?"contained":"outlined"} onClick={() =>  {setOrder("desc"); setSort("price")}} style={{ margin: "2%" }}>High TO Low</Button>

        <Button variant={sort === "hightolow"?"contained":"outlined"} onClick={() =>  {setOrder("desc"); setSort("price")}} style={{ margin: "2%" }}>High TO Low</Button> */}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "58px", width: "75%", margin: "auto", marginTop: "5%" }}>
        {
          token !== null ?
            products.loading ?
              <h1>Loading...</h1>
              : products.error
                ? <h1>Error</h1>
                : products.data.map((ele) =>
                  <Productcard key={ele.id} props={ele} style={{ marginBottom: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}  />) : <Navigate to="/login" />

        }
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "5%" }}>
        <Button variant="contained" onClick={() => setPage(prev => prev - 1)} disabled={page === 1} style={{ margin: "2%" }}>Prev</Button>

        <Button variant="contained" onClick={() => setPage(prev => prev + 1)} style={{ margin: "2%" }}>Next</Button>
      </div>


    </div>
    </>
  )
}