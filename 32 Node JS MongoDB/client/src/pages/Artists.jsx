import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useArtistContext } from "../context/ArtistContext";
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { deleteArtistByID, getAllArtists } from "../api/artistRequsts";

const Artists = () => {
  const[artists,setArtists] = useArtistContext();

  useEffect(()=>{
    getAllArtists().then(res=>{
      setArtists(res);
    })
  },[setArtists])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArtistByID(id);
        setArtists(artists.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllArtists(e.target.value).then(res=>{
          setArtists(res);
        })
     }} style={{marginBottom:'15px'}} id="outlined-basic" label="Search Artist" variant="outlined" />
     <Button style={{marginLeft:'10px'}} onClick={()=>{
        setArtists([...artists.sort((a,b)=>a.age-b.age)])
     }} variant="contained" color="info">Sort By Age</Button>
      </div>
      <Grid  container spacing={2}>
        {artists && artists.map((artist)=>{
          return <Grid key={artist._id} item lg={3} md={6} sm={12}>
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
            <Typography style={{marginBottom:'7px'}}><Link to={`/artists/${artist._id}`}>{artist.name}</Link></Typography>
            <Typography style={{marginBottom:'7px'}}>{artist.age}</Typography>
            </div>
            <Button onClick={()=>handleDelete(artist._id)} variant="contained" color="error">Delete</Button>
          </div>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
  );
};

export default Artists;
