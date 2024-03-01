import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Copyrights from '../../Components/Copyrights/Copyrights'

export default function Mainlayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
     <Footer/>
   <Copyrights/>
    </div>
  )
}
