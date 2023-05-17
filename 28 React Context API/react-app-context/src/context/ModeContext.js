import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeContextProvider = ({children})=> {
    const[mode,setMode] = useState(true);

    return(
        <ModeContext.Provider value={[mode, setMode]}>
            {children}
        </ModeContext.Provider>
    )
}

export const useModeContext = ()=> useContext(ModeContext)