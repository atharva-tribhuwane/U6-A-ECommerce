import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Individualprod } from "./Individualprod";
import { Link } from "react-router-dom";


export const Productcard = ({props}) => {
    // console.log(props)
    const navigate = useNavigate();
    const [tp, setTp] = useState("Helllo")

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${props.imageBase}/${props.hex.slice(1)}`}
          alt={`${props.color}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <div style={{display:"flex", justifyContent:"space-between", padding:"1%"}}>
            <Typography variant="body2" color="text.secondary" >
            ₹ {props.price}
            </Typography>
            <Typography variant="body2" color = {props.rating>4?"green":props.rating <4 && props.rating >2? "orange":"red"} style={{fontSize:"16px" ,fontWeight:"700"}}>
            ☆ {props.rating}/5
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/prod/${props.id}`}>
        <Button size="small" color="primary" >
          view
        </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
}
