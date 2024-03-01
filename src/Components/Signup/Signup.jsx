import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Signup() {
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
 async function getdatafromapi(values){
    setloading(true)
   await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
    .then(({data})=>{
      console.log(data);
      if(data.message == 'success'){
        navigate('/signin')
      }
    }).catch((err)=>{
      seterrormsg(err.response.data.message)
      console.log(err.response.data.message)
      setloading(false)
    })
    // .finally(() => {
    //   setloading(false); // Set loading to false after the API request completes (success or error)
    // });
  }


function validation(){
  let x = yup.object({
    name:yup.string().min(3).max(10).required(),
    email:yup.string().email().required(),
    password:yup.string().matches(/^[A-Za-z-0-9]{6,}$/).required(),
    rePassword:yup.string().oneOf([yup.ref('password')]).required()
  })
  return x
}
let register = useFormik({
  initialValues:{
    name :'',
    email:'',
    password:'',
    rePassword:''
  },
  validationSchema:validation,
  onSubmit:(values)=> getdatafromapi(values)
})
console.log(register.errors)
  return (
    <div className='py-5'>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Signup</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='w-75 m-auto'>
        <h2> Register Now:</h2>
        <form  onSubmit={register.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input value={register.values.name} onChange={register.handleChange} type="text" name='name' id='name' className='form-control mb-1' />
          {register.errors.name && register.touched.name ? <div className="alert alert-danger">{register.errors.name}</div> : ''}
          <label htmlFor="email">Email:</label>
          <input value={register.values.email} onChange={register.handleChange} type="email" name='email' id='email' className='form-control mb-1' />
          {register.errors.email && register.touched.email ? <div className="alert alert-danger">{register.errors.email}</div> : ''}
          <label htmlFor="password">Password:</label>
          <input value={register.values.password} onChange={register.handleChange} type="password" name='password' id='password' className='form-control mb-1' />
          {register.errors.password && register.touched.password ? <div className="alert alert-danger">{register.errors.password}</div> : ''}
          <label htmlFor="rePassword">Repassword:</label>
          <input value={register.values.rePassword}  onChange={register.handleChange}type="password" name='rePassword' id='rePassword' className='form-control mb-1' />
          {register.errors.rePassword && register.touched.rePassword ? <div className="alert alert-danger">{register.errors.rePassword}</div> : ''}
         {errormsg? <div className='alert alert-danger mt-4'>{errormsg}</div>: ''}
          <button disabled={ !(register.isValid && register.dirty)} type='submit' className='btn bg-main my-3 text-white'>{loading? <i className='fa fa-spinner fa-spin'></i> :'Signup'  }</button>
        
        </form>
      </div>

    </div>
  )
}
