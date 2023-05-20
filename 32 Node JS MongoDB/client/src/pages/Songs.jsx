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
import { deleteSong, getAllSongs, getArtistAllSongs, postSong } from '../api/songRequest';
import Swal from 'sweetalert2';

const Songs = () => {
  const[songs,setSongs] = useState([]);
  useEffect(()=>{
    getAllSongs().then(res=>{
        setSongs(res);
    })
  },[])
  return (
    <TableContainer style={{width:'80%',margin:'50px auto'}} component={Paper}>
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
  )
}

export default Songs