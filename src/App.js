import React from "react";

import {useFormik} from 'formik'

// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values =>{
      alert("Login Sucessful");
    },
    validate: (values) => {
      const errors = {};
        if (!values.email) errors.email = 'Field Required';
        if (!values.password) errors.password = 'Field Required';
        return errors;
      },
  });

  // TODO: add a const called formik assigned to useFormik()

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input 
          id="emailField"
          name="email"
          type="text"
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        <div>Password</div>
        <input 
          id="pswField"
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password}
        />        
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{color: "red"}}>
            {formik.errors.password}
          </div>
        ) : null}
    
        <button id="submitBtn" type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
