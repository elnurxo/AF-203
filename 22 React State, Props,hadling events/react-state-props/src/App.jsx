// import Counter from "./Counter"
// import Students from "./Students"

import { useState } from "react"
import Welcome from "./Welcome";
import Login from "./Login";

function App() {
  let[isLogged,setIsLogged] = useState(false);
  let[user,setUser] = useState({username:'',password:''});
  
  return (
    <>
      {/* <Counter/> */}
      {/* <Students/> */}
      { isLogged ? <Welcome user={user}/> : <Login user={user} setUser={setUser}  setIsLogged={setIsLogged}/> }
    </>
  )
}

export default App
