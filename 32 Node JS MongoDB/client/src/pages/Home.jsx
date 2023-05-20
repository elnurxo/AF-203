import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
   <div style={{width:'80%',margin:'0 auto'}}>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'40px'}}>
      <iframe title='1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24310.392992950743!2d49.852632017456095!3d40.39114446082927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2sHeydar%20Aliyev%20Centre!5e0!3m2!1sen!2saz!4v1684559342995!5m2!1sen!2saz" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      <Typography><b>Phone: </b> (+994)-55-555-55-55</Typography>
      <Typography><b>Mail: </b> code.edu@gmail.com</Typography>
   </div>
  )
}

export default Home