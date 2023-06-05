import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik} from 'formik';
import Swal from 'sweetalert2';
import { signUP } from "../api/requests";

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = async(values,actions)=>{
        const user = {
            username: values.username,
            password: values.password,
            email: values.email
        }
        const response =  await signUP(user);
        console.log(response.data);
        if (response.data.auth) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user signed up successfully!',
                showConfirmButton: false,
                timer: 1200
              })
            navigate('/login');
        }
       
        actions.resetForm();
    }
    const formik = useFormik({
        initialValues:{
            username: '',
            password: '',
            confirmPassword: '',
            email:''
        },
        onSubmit: handleSubmit
    })
  return (
    <div style={{height:'70vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username" id="outlined-basic" type="text" label="username" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email" id="outlined-basic" type="email" label="email" variant="outlined" />
        </div>
        <div>
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password" id="outlined-basic" type="password" label="password" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} name="confirmPassword" id="outlined-basic" type="password" label="confirm password" variant="outlined" />
        </div>
        <Button style={{display:'block',margin:'30px auto'}} type="submit" variant="contained" color="warning">Register</Button>
        <Link style={{display:'block',textAlign:'center'}} to='/login'>already have an account?</Link>
      </form>
    </div>
  );
};

export default Register;
