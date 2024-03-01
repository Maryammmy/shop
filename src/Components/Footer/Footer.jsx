import React from 'react'
import logo from '../../Assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <div className="container" >
            <div className="row py-5">
                <div className="col-md-4">
                    <div className="item">
              <img src={logo} alt=""  width={200}/>
              <h5 className='contact py-3'> Contact Information</h5>
              <h6>Privacy Policy</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <h5 className=' text-main text-center'>SITE MAP</h5>
                        <ul className='text-center ps-3'>
                           <div> <Link  to='/home' className='link'>Home</Link></div>
                           <div> <Link to='/products'  className='link'>Products</Link> </div>
                             <div><Link to='/categories'  className='link'>Carogories</Link></div>
                           <div> <Link to='/brands'  className='link'>Brands</Link> </div>
                           <div> <Link to='/cart'  className='link'>Cart</Link> </div>
                           <div><Link to='/wishlist'  className='link'>Wishlist</Link> </div> 
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <input type="text" placeholder='Email address' className='rounded-5 border-0 p-2'/>
                        <button className='btn but rounded-3 m-3'>Subscribe</button>
                        <div className='icons d-flex justify-content-center pe-5 me-5'>
                            <a href='https://web.facebook.com/?_rdc=3&_rdr' target='_blank' className='icon'><i class="fa-brands fa-facebook-f"></i></a>
                            <a href='https://twitter.com/' className='icon' target='_blank'><i class="fa-brands fa-twitter"></i></a>
                            <a href='https://mail.google.com'  className='icon' target='_blank'><i class="fa-solid fa-envelope"></i></a>
                            <a href='https://www.youtube.com/' className='icon' target='_blank'><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
