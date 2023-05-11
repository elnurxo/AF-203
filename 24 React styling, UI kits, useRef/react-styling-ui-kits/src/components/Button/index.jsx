import React from "react";
import style from "./index.module.css";

const Button = () => {
  return (
   <>
    <button className={style.btn}>
      Click Me!
    </button>
    <p className={style.title}>Lorem ipsum dolor sit amet.</p>
   </>
  );
};

export default Button;
