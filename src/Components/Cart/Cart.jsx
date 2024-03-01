import React, { useContext, useEffect, useState} from 'react'
import { storecontext } from '../../Context/Context'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Cart() {
  let {getcart ,deleteitem ,setcounter,updateitem} =useContext(storecontext)
  let [data,setdata] =useState(null)
  let [loading,setloading] =useState(true)
  useEffect(()=>{
   async function getcartdata(){
    let data =await getcart()
    if(data?.response?.data.statusMsg =="fail"){
      setdata(null)
    }
    else{
      setdata(data)
    } 
    console.log(data)
    setloading(false)
    }
    getcartdata()
  },[])
   async function Deleteitem(id){
    let data = await deleteitem(id)
    console.log(data)
   if(data.status=='success'){
    setdata(data)
    toast.error('Product deleted successfully')
    setcounter(data.numOfCartItems)
   }
  }
  async function Updateitem(id,count){
    let data = await updateitem(id,count)
    console.log(data)
   if(data.status=='success'){
    setdata(data)
    toast.success('Product updated successfully')
    setcounter(data.numOfCartItems)
   }
  }
  
 
  if (loading) return <Loading/>
  if(  data ==null || data.numOfCartItems == 0){
    setcounter(0)
    return <h2 className=' my-5 py-5 text-main text-center'>No item in cart</h2>
  } 
  return (
    <div className='py-5'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='container bg-main-light rounded-1 p-3 py-5 mt-5'>
      <h2>Shop Cart:</h2>
      <p className='text-main'>Total Cart Price : {data?.data.totalCartPrice} EGP</p>
     {data?.data.products.map(item=>{
      return  <div className="row py-2 border-bottom" key={item._id}>
      <div className="col-md-1">
          <img src={item.product.imageCover} alt="" className='w-100' />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
          <p className='m-1'>{item.product.title}</p>
          <p className='text-main ps-1 m-0'>Price: {item.price} EGP</p>
          <button className=' btn text-main ps-1 m-0 p-0' onClick={()=>Deleteitem(item.product._id)}>Remove <i className="  fa-solid fa-trash-can"></i></button>
          </div>
          <div>
            <button disabled={item.count == item.product.quantity} className='btn brdr' onClick={()=>Updateitem(item.product._id,item.count + 1)}>+</button>
            <span className='px-2'>{item.count}</span>
            <button  disabled={item.count == 1}  className='btn brdr' onClick={()=>Updateitem(item.product._id,item.count - 1)}>-</button>
          </div>
        </div>
      </div>

     })}
       <Link to={`/address/${data?.data._id}`} className='btn bg-main text-white m-auto d-block w-50 fw-bold my-4 p-2'>CHECKOUT</Link>
    </div>
    </div>
  )
}

