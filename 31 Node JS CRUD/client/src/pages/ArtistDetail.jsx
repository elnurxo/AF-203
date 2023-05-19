import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Button, Grid, Typography } from "@mui/material";
import { Card } from "antd";
import { getArtistByID } from '../api/artistRequsts'

const ArtistDetail = () => {
  const{id} = useParams()
  const[artist,setArtist] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    getArtistByID(id).then(res=>{
      setArtist(res);
    })
  },[id]);

  return (
   <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh',width:'100%'}}>
     <Grid>
      <Grid key={artist.id} item lg={12} style={{width:'300px'}}>
      <Card
        hoverable
        cover={
          <img
            style={{
              height: "300px",
              objectFit: "cover",
              objectPosition: "top center",
            }}
            alt="example"
            src={artist.imageURL}
          />
        }
      >
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography style={{marginBottom:'7px'}}>{artist.name}</Typography>
        <Typography style={{marginBottom:'7px'}}>{artist.age}</Typography>
        </div>
        <Button variant="contained" color="success" onClick={()=>{
          navigate('/artists');
        }}>Go Back</Button>
      </div>
      </Card>
    </Grid>
  </Grid>
   </div>
  )
}

export default ArtistDetail