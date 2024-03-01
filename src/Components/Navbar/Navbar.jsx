import React, { useContext, useEffect } from 'react'
import logo from '../../Assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'
import  { storecontext } from '../../Context/Context'

export default function Navbar() {
  let {counter ,setcounter ,getcart }=useContext(storecontext)
 
  useEffect(()=>{
async function getcardata(){
let data =await getcart()
console.log(data)
setcounter(data.numOfCartItems)
}
getcardata()
  },[])
  
  console.log(counter)
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light position-fixed w-100 z-3 ">
  <div className="container-fluid px-4 py-2">
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="brands">Brands</NavLink>
        </li>
       
      </ul>
      <ul className= "  navbar-nav ms-auto mb-2 mb-lg-0">
       
       <li className="nav-item ">
         <NavLink className="nav-link position-relative" to="cart">Cart
         <i className="fa-solid fa-cart-shopping fs-4 px-2"></i>
         {counter ?  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {counter}
      <span className="visually-hidden">unread messages</span>  </span>: ''}
     </NavLink>
       </li>
       <li className="nav-item">
         <NavLink className="nav-link position-relative" to="wishlist">Wishlist
         <i className="fa-solid fa-heart fs-4  px-2"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    4+
  </span>
  <span className="visually-hidden">unread messages</span>
  </NavLink>
       </li>
       <li className="nav-item ">
          <NavLink className="nav-link" to="signin">Sign out</NavLink>
        </li>

       
     
     
     
      
     </ul>
   
    </div>
  </div>
</nav>

    </>
  )
}
