import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useBasketContext } from "../context/BasketContext";
import Swal from "sweetalert2";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const[basket,setBasket] = useBasketContext();
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <Grid style={{ width: "80%", margin: "0 auto" }} container spacing={2}>
        {  categories && categories.map((category)=>{
            return   <Grid key={category.id} item lg={3} md={4} sm={12}>
            <Card style={{height:'170px'}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {category.name}
                </Typography>
                <Typography component="p">
                  {category.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>{
                    setBasket([...basket,category]);
                    let basketItems = JSON.parse(localStorage.getItem("basket"));
                    localStorage.setItem("basket",JSON.stringify([...basketItems,category]));
                    Swal.fire({
                        position: 'bottom-right',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1000
                      })
                }} variant="contained" size="small">Add To Basket</Button>
              </CardActions>
            </Card>
          </Grid>
        }) }
    </Grid>
  );
};

export default Home;
