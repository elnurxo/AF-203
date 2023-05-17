import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useBasketContext } from '../context/BasketContext';


const Navbar = () => {
  const[basket,setBasket] = useBasketContext();
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Basket <sup style={{color:'white',fontWeight:'bold'}}>{basket.length}</sup></Button>
          <Button variant='contained' color="warning" onClick={()=>{
            setBasket([]);
            localStorage.setItem("basket",JSON.stringify([]));
          }}>Clear Basket</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar