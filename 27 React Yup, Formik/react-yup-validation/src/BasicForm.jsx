import React from "react";
import { useFormik } from "formik";
import { BasicFormSchema } from "./validation/BasicFormValidation";

const BasicForm = () => {
  //submit formik form
  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      nationality: '',
      isSingle: false,
    },
    onSubmit: handleSubmit,
    validationSchema: BasicFormSchema,
  });

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          style={{
            borderColor: `${
              formik.errors.fullName && formik.touched.fullName
                ? "red"
                : "black"
            }`,
          }}
          onChange={formik.handleChange}
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          name="fullName"
          type="text"
          placeholder="full name"
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <p style={{ color: "red" }}>{formik.errors.fullName}</p>
        )}
        <input
          style={{
            borderColor: `${
              formik.errors.age && formik.touched.age ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          name="age"
          type="number"
          placeholder="age"
        />
        {formik.errors.age && formik.touched.age && (
          <p style={{ color: "red" }}>{formik.errors.age}</p>
        )}
        <input
          style={{
            borderColor: `${
              formik.errors.email && formik.touched.email ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          placeholder="email"
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
        <input
          name="password"
          value={formik.values.password}
          style={{
            borderColor: `${
              formik.errors.password && formik.touched.password ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="enter password"
        />
         {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
        <input
          name="confirmPassword"
          value={formik.values.confirmPassword}
          style={{
            borderColor: `${
              formik.errors.confirmPassword && formik.touched.confirmPassword ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="confirm password"
        />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
        )}
        <span>Are you single?</span>
        <input name="isSingle" onChange={formik.handleChange} onBlur={formik.handleBlur} type="checkbox"/>
        {formik.errors.isSingle && formik.touched.isSingle && (
          <p style={{ color: "red" }}>{formik.errors.isSingle}</p>
        )}
        <select name="nationality" value={formik.values.nationality} onChange={formik.handleChange} onBlur={formik.onBlur}>
            <option>Choose your nationality</option>
            <option value='az'>Azerbaijan</option>
            <option value='tr'>Turkey</option>
            <option value='ru'>Russia</option>
            <option value='ch'>China</option>
        </select>
        {formik.errors.nationality && formik.touched.nationality && (
          <p style={{ color: "red" }}>{formik.errors.nationality}</p>
        )}
        <button disabled = {Object.keys(formik.errors).length!==0 ? true : false} type="submit">Submit</button>
      </form>
    </>
  );
};

export default BasicForm;
