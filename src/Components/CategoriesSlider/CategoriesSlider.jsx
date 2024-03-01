import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategoriesSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay:true,
      };
      const [categories,setcategories] =useState([])
     function getcategory(){
        axios.get('https://ecommerce.routemisr.com/api/v1/categories')
        .then(({data})=>{
          setcategories(data.data)
          console.log(data.data)
        })
        .catch((err)=>err)
      }
      useEffect(()=>{
       getcategory()
      },[])
   
  return (
    
<div className="container my-5 text-center">
  <h2 className='py-3'>Shop Popular Categories</h2>
<Slider {...settings}>
    
  {categories.map((item)=> 
  <div key={item._id}>
  <img src={item.image} alt="" height={200} className='w-100 px-2 rounded-circle' />
  <h4>{item.name}</h4>
  </div>

 
  )}

</Slider>
</div>
    
  )
}
