import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { cartLoading, cartSuccess, cartError } from "../Redux/cart/action";
export const Individualprod = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(1);
    const {cart} = useSelector(state=>state.Cart);
    const { token } = useSelector(state => state.Login);
    const dispatch = useDispatch();
    console.log("Caart:",cart)
    const { id } = useParams();
    console.log(id);

    const addtocart = ()=>{
        const payLoad={
            title:data.title,
            price:data.price,
            quantity:count,
            totalprice:(data.price*count),
            rating:data.rating,

        }
        console.log("In add to cart");
        let flag = 0;
        cart.forEach(function(ele){
            if(ele.title === data.title){
                flag = 1;
            }
        })
        if(flag===1){
            alert("already in cart");
        }
        else{
            dispatch(cartSuccess(payLoad));
            alert("Item Added to cart");
        }
    }

    useEffect(() => {
        async function getData() {
            let res = await fetch(`http://localhost:3001/products/${id}`);
            let adata = await res.json();
            console.log("adata: ",adata);
            setData(adata);
        }
        getData();
    }, [])
    return (
        <div style={{height:"100vh",display:"flex", alignItems:"center"}}>
        <Card sx={{ maxWidth: 345 }} style={{width:"100%", margin:"auto", border:"1px solid grey"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${data.imageBase}/${data.hex}.slice(1)`}
                    alt={`${data.color}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1%" }}>
                        <Typography variant="body2" color="text.secondary" >
                            ₹ {data.price}
                        </Typography>
                        <Typography variant="body2" color={data.rating > 4 ? "green" : data.rating < 4 && data.rating > 2 ? "orange" : "red"} style={{ fontSize: "16px", fontWeight: "700" }}>
                            ☆ {data.rating}/5
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary" variant="contained" disabled={count===1} onClick = {()=>setCount(prev=>prev-1)}>
                        -
                    </Button>
                    <div style={{fontweight:"700", margin:"0 5%"}}>{count}</div>
                    <Button size="small" color="primary" variant="contained" onClick = {()=>setCount(prev=>prev+1)}>
                        +
                    </Button>
                    <Button size="small" color="primary" onClick={()=>addtocart()}>
                        Add to cart
                    </Button>
            </CardActions>

        </Card>
        </div>
    );
}

