import PropTypes from 'prop-types'; 
import { useEffect } from 'react';
const Show = ({isShow}) => {

  useEffect(()=>{
    console.log('component mounted');
  },[]);

  useEffect(()=>{
    console.log('component updated');
  },[isShow]);
  
  useEffect(()=>{
   if(isShow){
    return()=>{
      console.log('component unmounted!');
    }
   }
  },[isShow]);
  return (
    <>
      {isShow ? <div>Show</div> : null}
    </>
  )
}
Show.propTypes = {
  isShow: PropTypes.bool
}
export default Show