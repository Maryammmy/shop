import axios from "axios";
import { createContext, useState } from "react";

async function addtocart(productId){
    console.log('Adding product to cart with ID:', productId);  
  try {
         const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, {
             headers: {
                 token: localStorage.getItem('token')
             }
         });
         return data;
     } catch (err) {
         return err;
     }
}
 async function getcart(){
  try {
         const  {data}  = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
             headers: {
                 token: localStorage.getItem('token')
             }
         });

         return data;
       
     } catch (err) {
         return err;
     }
}
async function deleteitem(productId){
    console.log('Adding product to cart with ID:', productId);  
  try {
         const data  = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/'+ productId ,{
             headers: {
                 token: localStorage.getItem('token')
             }
         });
         return data;
     } catch (err) {
         return err;
     }
}
async function updateitem(productId,count){
    console.log('Adding product to cart with ID:', productId);  
  try {
         const { data } = await axios.put('https://ecommerce.routemisr.com/api/v1/cart/'+ productId ,{count},{
             headers: {
                 token: localStorage.getItem('token')
             }
         });
         return data;
     } catch (err) {
         return err;
     }
}
async function pay(cartId,shippingAddress){
  try {
         const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/'+ cartId ,{shippingAddress},{
             headers: {
                 token: localStorage.getItem('token')
             }
         });
         return data;
     } catch (err) {
        console.log(err)
         return err;
     }
}
async function addtowishlist (productId){
   try {
        const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId }, {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        return data;
    } catch (err) {
        return err;
    }
}
async function getwishlist (){
  try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        return data;
    } catch (err) {
        return err;
    }
}

  export let storecontext= createContext(0)
  export default function Storecontextprovider({children}){
    let [counter,setcounter] =useState(0)
    let [wishcounter,setwishcounter]=useState(0)
    return <storecontext.Provider value={{counter,setcounter,addtocart,getcart,deleteitem,updateitem,pay,addtowishlist,getwishlist,wishcounter,setwishcounter}}>
         {children}
    </storecontext.Provider>
 }