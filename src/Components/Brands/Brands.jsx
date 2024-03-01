import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import {Helmet} from "react-helmet";

export default function Brands() {
let [brand,setbrand] =useState([])
let [loading,setloading] =useState(true)
 function getallbrands(){
    axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    .then(({data})=>{
      setbrand(data.data)
      setloading(false)
console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
useEffect(()=>{
  getallbrands()
},[])

if(loading) return <Loading/>
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container py-5">
      <div className="row">
      <h1 className='text-center pt-4  text-main mt-4'>Our Brands </h1>
        {brand.map((item)=>{
          return <div key={item._id} className="col-md-3">
            <div className="item">
              <img src={item.image} alt="" className='w-100' />
            </div>
            </div>
        })}
      </div>
    </div>
    </>
  )
}
