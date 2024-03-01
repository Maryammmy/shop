import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Signin() {
//   function validate(values){
//     const myerror ={}
//     if(!values.name){
//       myerror.name ='name is required'
//     }
//     if(!values.email){
//       myerror.email ='email is required'
//     }
//     if(!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.password)){
//       myerror.password ='password must be a charater and more and start with a captial char'
//     }
//     if(values.rePassword !==  values.password && (!values.rePassword) ){
//       myerror.rePassword ='password and repassword not match'
//     }

// return myerror
//   }
let navigate = useNavigate()
const [errormsg,seterrormsg] =useState('')
const [loading,setloading] =useState(false)
 function getdatafromapi(values){
    setloading(true)
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
    .then(({data})=>{
      if (data && data.message === 'success') {
        localStorage.setItem('token', data.token);
        navigate('/home');
        console.log(data);
        setloading(false)
      } 
      else {
        seterrormsg('Unexpected response format');
        console.log(data); // Log the entire response for debugging purposes
      }
    })
  
    .catch((err)=>{
      seterrormsg(err?.response?.data?.message)
      console.log(err)
  
    })
    .finally(() => {
      setloading(false)
    // Set loading to false after the API request completes (success or error)
    });
  }


function validation(){
  let x = yup.object({
    email:yup.string().email().required(),
    password:yup.string().matches(/^[A-Za-z-0-9]{6,}$/).required(),
  })
  return x
}
let login= useFormik({
  initialValues:{
    email:'',
    password:'',
  },
  validationSchema:validation,
  onSubmit:(values)=> getdatafromapi(values)
})
console.log(login.errors)
  return (
    <div className='py-5'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Signin</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='w-75 m-auto'>
        <h2> Login Now:</h2>
        <form  onSubmit={login.handleSubmit}>
          
          <label htmlFor="email">Email:</label>
          <input value={login.values.email} onChange={login.handleChange} type="email" name='email' id='email' className='form-control mb-1' />
          {login.errors.email && login.touched.email ? <div className="alert alert-danger">{login.errors.email}</div> : ''}
          <label htmlFor="password">Password:</label>
          <input value={login.values.password} onChange={login.handleChange} type="password" name='password' id='password' className='form-control mb-1' />
          {login.errors.password && login.touched.password ? <div className="alert alert-danger">{login.errors.password}</div> : ''}
         {errormsg? <div className='alert alert-danger mt-4'>{errormsg}</div>: ''}
          <button disabled={ !(login.isValid && login.dirty)} type='submit' className='btn bg-main my-3 text-white'>{loading? <i className='fa fa-spinner fa-spin'></i> :'Sigin'  }</button>
        
        </form>
      </div>

    </div>
  )
}

