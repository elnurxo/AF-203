import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{background:'linear-gradient(90deg, rgba(48,78,45,1) 0%, rgba(22,110,65,1) 53%, rgba(19,116,25,1) 100%)',}} position="static">
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
            Spotify App
          </Typography>
          <Link  to="/"><Button style={{color:'white',marginRight:'10px'}} color="info"  variant='outlined'>Home</Button></Link>
          <Link  to="/artists"><Button style={{color:'white',marginRight:'10px'}} color="info"  variant='outlined'>Artists</Button></Link>
          <Link  to="/artists/add"><Button style={{color:'white'}} color="info"  variant='outlined'>Add Artist</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Navbar