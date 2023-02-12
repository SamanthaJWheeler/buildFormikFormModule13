import React from "react";

import {useFormik} from 'formik'

// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },
    onSubmit: values =>{
      console.log('form:', values);
    }
  });
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} 
        value={formik.values.name}/>
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} 
        value={formik.values.email}/>
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} 
        value={formik.values.password}/>        
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
