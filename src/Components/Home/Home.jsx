// import React, { useState ,useEffect} from 'react'
// import Mainslider from '../Mainslider/Mainslider'
// import Categories from '../CategoriesSlider/CategoriesSlider'
// import Products from '../Products/Products'
// import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
// import {Helmet} from "react-helmet";

// export default function Home() {

//   return (
//    <>
//     <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>Home</title>
//                 <link rel="canonical" href="http://mysite.com/example" />
//             </Helmet>
//     <div className='overflow-hidden py-5'>
        
//       <Mainslider/>
//       <CategoriesSlider/>
//       <h2 className='text-center pt-3'>Our Products </h2>
//       <Products displayH2={false} />
    
//     </div>
//     </>
//   )
// }
import axios from 'axios'
import React from 'react';
import Mainslider from '../Mainslider/Mainslider';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import Products from '../Products/Products';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Product from '../Product/Product'

export default function Home() {
  const { data, isError, isFetching, isLoading } = useQuery('getproducts', getProducts);

  function getProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='overflow-hidden py-5'>
            <Mainslider />
            <CategoriesSlider />
         
            <div className="container py-5">
            <h2 className='text-center pt-3'>Our Products </h2>
      <div className="row gy-3">
      {data?.data.data.map((item)=>{
        return  <Product key={item._id} item={item}/>
      })}
      </div>
    </div>
      </div>
    </>
  );
}

