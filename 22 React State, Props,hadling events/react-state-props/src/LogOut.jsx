
const LogOut = ({setIsLogged}) => {
    function handleClick(){
        if (window.confirm("are you sure to exit?")) {
            setIsLogged(false);
        }   
    }
  return (
    <button onClick={()=>handleClick()}>log out</button>
  )
}

export default LogOut