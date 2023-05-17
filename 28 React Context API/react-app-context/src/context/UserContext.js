import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const[user,setUser] = useState(false);


    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=> useContext(UserContext);