
import React from 'react'
import Slider from "react-slick";
import slide1 from '../../Assets/images/082dff41-7249-4196-9229-1d70c60d1103.avif'
import slide2 from '../../Assets/images/1cc4c0fc-9ba0-412f-a492-24e26bd58477.avif'
import slide3 from '../../Assets/images/a4f4b458-c1f1-424c-aa1f-fd5bd2a8d41f.avif'
import slide4 from '../../Assets/images/cddaf249-2389-404b-90e9-fa18e96c23a8.avif'

export default function Mainslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
       
      };
  return (
    <div className='py-4' >
      <Slider {...settings}>
    
        <img   src={slide1} alt="" />
      
      
        <img src={slide2} alt="" />
    
    
        <img src={slide3} alt="" />

      
        <img src={slide4} alt="" />

    </Slider>
    </div>
    
  )
}
