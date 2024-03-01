import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";

export default function Categories() {
    let [category,setcategory] =useState([])
  function  getallcategory(){
axios.get('https://ecommerce.routemisr.com/api/v1/categories')
.then(({data})=>{
    setcategory(data.data)
    console.log(data)
})
.catch((err)=>err)
    }
    useEffect(()=>{
        getallcategory()
    },[])
  return (
    <>
    <div className="container py-5">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="row gy-5">
            <h1 className='text-center pt-4 text-main mt-5 pt-5'>Our Categories </h1>
            {category.map((item)=>{
                return <div key={item._id} className="col-md-3 ">
                    <div className="item rounded-3 overflow-hidden">
                        <img src={item.image} alt="" className='w-100 '  height={300}/>
                    </div>
                </div>
            })}
        </div>
    </div>
    </>
  )
}
