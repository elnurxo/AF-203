import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik} from 'formik';
import Swal from 'sweetalert2';
import { signIN } from "../api/requests";
import { useUserContext } from "../context/UserContext";

const Login = () => {
    const[user,setUser] = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async(values,actions)=>{
        const response = await signIN(values);
        console.log(response);
        if(response.auth){
            localStorage.setItem('token',response.token);
            localStorage.setItem('user',JSON.stringify(response.user));
            setUser(response.user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user signed in successfully!',
                showConfirmButton: false,
                timer: 1200
            })
            navigate('/users');
        }
        actions.resetForm();
    }
    const formik = useFormik({
        initialValues:{
            username: '',
            password: '',
        },
        onSubmit: handleSubmit
    })
  return (
    <div style={{height:'70vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username" id="outlined-basic" type="text" label="username" variant="outlined" />
      </div>
      <div>
        <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password" id="outlined-basic" type="password" label="password" variant="outlined" />
      </div>
      <Button style={{display:'block',margin:'30px auto'}} type="submit" variant="contained" color="warning">Login</Button>
      <Link style={{display:'block',textAlign:'center'}} to='/register'>dont have an account?</Link>
    </form>
  </div>
  )
}

export default Login