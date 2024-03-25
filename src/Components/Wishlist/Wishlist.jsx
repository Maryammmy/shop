import React, { useContext, useEffect } from 'react'
import './Wishlist.css'
import {Helmet} from "react-helmet";
import { storecontext } from '../../Context/Context';
import { useState } from 'react';
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading';


export default function Wishlist() {
  let [product,setproducts] =useState([])
  const [loadingbtn,setloadingbtn] =useState(false)
  const [loading,setloading] =useState(true)
 
  let {getwishlist,addtocart,addtowishlist,setcounter,setwishcounter}= useContext(storecontext)
  useEffect(()=>{
   async function getproducttowishlist(){
      let data = await getwishlist()
      console.log(data)
    if(data.status=='success'){
      setproducts(data.data)
      setloading(false)
    }
    }
    getproducttowishlist()
  },[])
  async function addproducttocart(productId){
    setloadingbtn(true)
 let data =await addtocart(productId)
 console.log(data)
 if(data.status=='success'){
  toast.success('Product added successfully')
  setcounter(data.numOfCartItems)
 setloadingbtn(false)
 }
 }

 if(loading) return <Loading/>
  return (
    <>
   <div className="container pt-5">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="row py-5 gy-4">
              <h2 className='text-main text-center py-4'>Wishlist</h2>
              {product.map((item)=>{
                return <div className="col-md-3" key={item._id}>
                <div className='product cursor-pointer rounded-3 p-3 shadow'>
                <a className='fs-5 text-end pb-1'><i class="fa-solid fa-heart text-secondary"></i></a>
              <div className='text-center'><img src={item.imageCover} alt="" className='w-75' /></div>  
                 <span className='text-main my-2 fw-bold'>{item.category.name}</span>
          <h5>{item.title.split(' ').slice(0,2).join(' ')}</h5>
          <div className='d-flex justify-content-between'>
            <div>{item.price} EGP</div>
            <div> <i className='fa-solid fa-star rating-color px-1'></i>{item.ratingsAverage}</div>
          </div>
          <button disabled={loadingbtn} onClick={()=>addproducttocart(item._id)} className='bg-main btn w-100 text-white'>
            {loadingbtn ? 'Loading...' :'Add to cart'  }</button>
                </div>
                </div>
              })}
         
           </div>
           </div>
    </>

  )
}
