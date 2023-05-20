import React from "react";
import { useFormik } from 'formik';
import { Button, TextField } from "@mui/material";
import { ArtistSchema } from "../validation/ArtistValidation";
import Swal from "sweetalert2";
import { postArtists } from "../api/artistRequsts";
import { useNavigate } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";

const AddArtist = () => {
  const navigate = useNavigate();
  const[artists,setArtists] = useArtistContext();
  function handleSubmit(values, actions) {
    postArtists(values)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/artists');
    setArtists([...artists, values]);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      imageURL: "",
    },
    validationSchema: ArtistSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          border: "1px solid #eee",
          width: "50%",
          height: "400px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          id="outlined-basic"
          value={formik.values.name}
          label="Artist Name"
          variant="outlined"
          error={formik.errors.name && formik.touched.name ? true : false}
        />
        {formik.errors.name && formik.touched.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="age"
          type="number"
          value={formik.values.age}
          error={formik.errors.age && formik.touched.age ? true : false}
          id="outlined-basic"
          label="Artist Age"
          variant="outlined"
        />
         {formik.errors.age && formik.touched.age && <p style={{color:'red'}}>{formik.errors.age}</p>}
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          error={formik.errors.imageURL && formik.touched.imageURL ? true : false}
          name="imageURL"
          type="text"
          id="outlined-basic"
          label="Artist Image"
          variant="outlined"
        />
         {formik.errors.imageURL && formik.touched.imageURL && <p style={{color:'red'}}>{formik.errors.imageURL}</p>}

        <Button
          style={{ display: "block", margin: "10px auto" }}
          type="submit"
          variant="contained"
          color="warning"
        >
          Add Artist
        </Button>
      </form>
    </div>
  );
};

export default AddArtist;
