import { BASE_URL } from "./baseURL";
import axios from "axios";

//get all
export const getAllArtists = async(name)=>{
    let Artists;
    let URL;
    if (!name) {
        URL = BASE_URL+'/artists';
    }
    else{
        URL = BASE_URL+`/artists/?name=${name}`
    }
    await axios.get(URL)
    .then(res =>{ 
        Artists = res.data;
    })

    return Artists
}
//get by id
export const getArtistByID = async(id)=>{
    let Artist;
    await axios.get(`${BASE_URL}/artists/${id}`)
    .then(res =>{ 
        Artist = res.data;
    })

    return Artist
}
//delete
export const deleteArtistByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/artists/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postArtists = (payload)=>{
    axios.post(`${BASE_URL}/artists`,payload)
}
//edit
export const editArtistByID = (id,payload)=>{
    axios.put(`${BASE_URL}/artists/${id}`,payload)
}