import { useEffect, useState } from "react";
const FetchData = () => {
    let [dataState, setDataState] = useState([]);
    let[counter,setCounter] = useState(0);
  
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA FETCHED!");
        setDataState(data);
      });
    },[counter]); //component mount
  return (
    <>
     <button onClick={()=>{
        setCounter(--counter);
      }}>-</button>
      <span>{counter}</span>
      <button onClick={()=>{
        setCounter(++counter);
      }}>+</button>
      <ul>
        {dataState &&
          dataState.map((data) => {
            return <li key={data.id}>{data.title}</li>;
          })}
      </ul>
    </>
  )
}

export default FetchData