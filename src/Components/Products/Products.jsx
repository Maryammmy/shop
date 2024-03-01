import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'
import { useQuery } from 'react-query'
import {Helmet} from "react-helmet";

export default function Products () {
  function getproducts(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
    let {data,isError,isFetching,isLoading}  =   useQuery('getproducts',getproducts)
    console.log(data?.data.data)
    console.log(isLoading)
    console.log(isFetching)
//   const [products,setproducts] =useState([])
//   const [loading,setloading] =useState(true)
//  async function getproducts(){

//   let {data}=await  axios.get('https://ecommerce.routemisr.com/api/v1/products')
//   console.log(data.data)
//   setproducts(data.data)
//   setloading(false)
//   }
//   useEffect(()=>{
// getproducts()
//   },[])
  if(isLoading){
   return <Loading/>
  }


  return (
   
    <>
    <div className="container py-5">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="row gy-3">
      <h2 className='text-main text-center pt-4 mt-5'>Our Products </h2>
      {data?.data.data.map((item)=>{
        return  <Product key={item._id} item={item}/>
      })}
      </div>
    </div>
    </>
   
  )
}
