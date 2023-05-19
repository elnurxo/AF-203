import { createContext, useContext, useState } from "react";

const ArtistContext = createContext();

export const ArtistContextProvider = ({children})=>{
    const[artists,setArtists] = useState([]);

    return(
        <ArtistContext.Provider value={[artists,setArtists]}>
            {children}
        </ArtistContext.Provider>
    )
}

export const useArtistContext = ()=> useContext(ArtistContext)