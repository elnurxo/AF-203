import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { getArtistByID } from '../api/artistRequsts'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from "formik";
import { SongSchema } from '../validation/SongValidation';
import { deleteSong, getArtistAllSongs, postSong } from '../api/songRequest';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ArtistDetail = () => {
  const [open, setOpen] = useState(false);
  const[songs,setSongs] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const{id} = useParams()
  const[artist,setArtist] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    getArtistByID(id).then(res=>{
      setArtist(res);
    })
  },[id]);
  useEffect(()=>{
    getArtistAllSongs(id).then((res)=>{
       setSongs(res)
    });
  },[id])
  function handleSubmit(values,actions){
    console.log(values);
    values.artistID = artist._id;
    postSong(values);
    setSongs([...songs,values])
    handleClose();
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      cover: '',
      duration: '',
      songURL: ''
    },
    validationSchema: SongSchema,
    onSubmit: handleSubmit
  })

  return (
   <div style={{width:'90%',margin:'50px auto'}}>
     <Grid container style={{display:'flex',justifyContent:'space-between'}}>
      <Grid item lg={3}>
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
      <Button onClick={handleOpen} style={{marginTop:'10px'}} variant='contained' color="primary">Add Song</Button>
      </Grid>
      {/* Songs Table */}
      <Grid item lg={6}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cover</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align='right'>Duration</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => (
            <TableRow
              key={song._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img width={70} height={70} src={song.cover} alt={song.title}/>
              </TableCell>
              <TableCell align="right"><a href={song.songURL} target='_blank' rel='noreferrer'>{song.title}</a></TableCell>
              <TableCell align="right">{song.duration}</TableCell>
              <TableCell onClick={()=>{
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
                    deleteSong(song._id);
                    setSongs(songs.filter((x)=>x._id!==song._id));
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
              }} align="right"><Button variant='contained' color="error">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
  </Grid>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography align='center' style={{marginBottom:'15px'}}>Create New Song :)</Typography>
            <form onSubmit={formik.handleSubmit}>
              <div style={{display:'flex',gap:'10px'}}>
              <TextField error={formik.errors.title ? true: false} name='title' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} id="outlined-basic" style={{marginBottom:'10px'}} type='text' label="Song Title" variant="outlined" />
              <TextField error={formik.errors.duration ? true: false} name='duration' value={formik.values.duration} onChange={formik.handleChange} onBlur={formik.handleBlur} id="outlined-basic" type='number' label="Song Duration" variant="outlined" />
              </div>
              <div style={{display:'flex',gap:'10px'}}>
              <TextField error={formik.errors.cover ? true: false} name='cover' value={formik.values.cover} onChange={formik.handleChange} onBlur={formik.handleBlur} id="outlined-basic" style={{marginBottom:'10px'}} type='text' label="Song Cover" variant="outlined" />
              <TextField error={formik.errors.songURL ? true: false} name='songURL' value={formik.values.songURL} onChange={formik.handleChange} onBlur={formik.handleBlur} id="outlined-basic" type='text' label="Song URL" variant="outlined" />
              </div>
              <Button style={{display:'block',margin:'10px auto'}} variant='contained' color="info" type='submit'>Add Song for {artist.name}</Button>
            </form>
        </Box>
      </Modal>
   </div>
   
  )
}

export default ArtistDetail