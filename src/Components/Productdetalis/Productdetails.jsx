import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { storecontext } from '../../Context/Context'
import { Helmet } from 'react-helmet';

export default function Productdetails() {
  let {counter,setcounter}= useContext(storecontext)
  let param =  useParams()
  const[product,setproduct] = useState({})
  const [loading,setloading] =useState(true)
 
 async function getproductdetails(){
 
 let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${param.id}`)
 console.log(data.data)
 setproduct(data.data)
 setloading(false)
  }
  useEffect(()=>{
    getproductdetails()
  },[])
 if(loading) return <Loading/>
  return (
    <div className='py-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ProductDetails</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <img src={product.imageCover} alt="" className='w-100' />
                </div>
                <div className="col-md-9 my-5">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <p className='my-3'>{product.category.name}</p>
                    <div className='d-flex justify-content-between'>
                   <div>{product.price} EGP</div>
                <div> <i className='fa-solid fa-star rating-color px-1'></i>{product.ratingsAverage}</div>
                </div>
                <button onClick={()=>setcounter(counter+1)} className='btn bg-main w-100 my-4 text-white'>Add to cart </button>
                </div>
            </div>
        </div>
    </div>
  )
}
