import { BASE_URL } from "./baseURL";
import axios from "axios";

//get Artist All Songs
export const getArtistAllSongs = async(artistID)=>{
    let globalData;
    await axios.get(`${BASE_URL}/songs/${artistID}`)
    .then(res=>{
        globalData = res.data
    })
    return globalData;
}

export const getAllSongs = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/songs`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}

export const postSong = (payload)=>{
    axios.post(`${BASE_URL}/songs`,payload)
}
export const deleteSong = (id)=>{
    axios.delete(`${BASE_URL}/songs/${id}`);
}