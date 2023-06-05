import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children})=>{
    const[user,setUser] = useState(null);
    useEffect(()=>{
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    },[])

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=> useContext(UserContext);