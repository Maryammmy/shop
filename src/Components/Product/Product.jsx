import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Productdetails from '../Productdetalis/Productdetails'
import { storecontext } from '../../Context/Context'
import { toast } from 'react-toastify'

export default function Product ({item}) {
 let {counter,setcounter ,addtocart}=useContext(storecontext)
 const [loading,setloading] =useState(false)
  async function addproducttocart(productId){
    setloading(true)
 let data =await addtocart(productId)
 console.log(data)
 if(data.status=='success'){
  toast.success('Product added successfully')
  setcounter( data.numOfCartItems)
  setloading(false)
 }
 }
  return (
    <>
   <div className="col-md-2 ">
        <div className="product cursor-pointer rounded-3 p-3">
     <Link to={'/Productdetails/' + item._id}>
     <img src={item.imageCover} alt="" className='w-100' />
          <span className='text-main my-2 fw-bold'>{item.category.name}</span>
          <h5>{item.title.split(' ').slice(0,2).join(' ')}</h5>
          <div className='d-flex justify-content-between'>
            <div>{item.price} EGP</div>
            <div> <i className='fa-solid fa-star rating-color px-1'></i>{item.ratingsAverage}</div>
          </div>
     </Link>
          <button disabled={loading} onClick={()=>addproducttocart(item._id)} className='bg-main btn w-100 text-white'>
            {loading ? 'Loading...' :'Add to cart'  }</button>
        
        </div>
      </div>
    </>
  )
}
