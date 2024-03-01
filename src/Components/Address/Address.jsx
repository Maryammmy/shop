import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { storecontext } from '../../Context/Context'
export default function Address() {
let {id}=useParams()
let {pay}=useContext(storecontext)
const [errormsg,seterrormsg] =useState('')
const [loading,setloading] =useState(false)
async function payonline(values) {
  setloading(true);
  let data = await pay(id, values)
  setloading(false)
  console.log(data);
  if(data.status == "success"){
    window.location.href = data.session.url
  }
  else{
    seterrormsg(data.response.data.message)
  }
    
  
}
let Address= useFormik({
  initialValues:{
    details:'',
    phone:'',
    city:'',
  },

  onSubmit:(values)=> payonline(values)
})

  return (
    <div>
      <div className='w-75 m-auto'>
        <h2> Checkout:</h2>
        <form  onSubmit={Address.handleSubmit}>
          
          <label htmlFor="details">Details:</label>
          <textarea value={Address.values.details} onChange={Address.handleChange} type="text" name='details' id='details' className='form-control mb-1' />
         
          <label htmlFor="phone">Phone:</label>
          <input value={Address.values.phone} onChange={Address.handleChange} type="text" name='phone' id='phone' className='form-control mb-1' />
          <label htmlFor="city">City:</label>
          <input value={Address.values.city} onChange={Address.handleChange} type="text" name='city' id='city' className='form-control mb-1' />
  
         {errormsg? <div className='alert alert-danger mt-4'>{errormsg}</div>: ''}
          <button disabled={ !(Address.isValid && Address.dirty)} type='submit' className='btn bg-main my-3 text-white m-auto d-block w-50'>{loading? <i className='fa fa-spinner fa-spin'></i> :'PLACE ORDER'  }</button>
        
        </form>
      </div>

    </div>
  )
}

