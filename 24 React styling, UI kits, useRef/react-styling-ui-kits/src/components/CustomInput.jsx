import { forwardRef } from "react";

const CustomInput = forwardRef((props,ref) => {
    return (
      <input ref={ref}  placeholder='search product'/>
    )
})

export default CustomInput