import { useState } from "react"
import { data } from "./users.js";

const Login = ({setIsLogged,user,setUser}) => {
  function handleSubmit(e){
    e.preventDefault();
    let found = data.find((item)=>item.username==user.username && item.password == user.password);
    if (found===undefined)
        found=false;
    else
        found = true;
    setIsLogged(found);
  }
  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="username" onChange={(e)=>handleChange(e)} placeholder="username" type='text' required/>
        <input name="password" onChange={(e)=>handleChange(e)} placeholder="password" type='password' required/>
        <button type="submit">Login</button>
    </form>
  )
}

export default Login