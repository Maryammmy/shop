import React from 'react'
import './Wishlist.css'
import {Helmet} from "react-helmet";

export default function Wishlist() {
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='wishlist'>Wishlist</div>
    </>

  )
}
