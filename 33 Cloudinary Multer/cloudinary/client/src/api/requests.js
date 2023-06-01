import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllSliders = async()=>{
    let allSliders;
    await axios.get(`${BASE_URL}/sliders`)
    .then((res)=>{
        allSliders = res.data.data;
    })

    return allSliders;
}

export const postSlider = (payload)=>{
    axios.post(`${BASE_URL}/sliders`,payload);
}