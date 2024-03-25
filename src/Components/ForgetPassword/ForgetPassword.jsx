import axios from 'axios'
import React from 'react'

export default function ForgetPassword() {
   async function handleSubmit(values){
   return axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values)
        .then(({data})=>data)
        .catch(err=>err)
    }
handleSubmit()  

function validation(){
    let x = yup.object({
      email:yup.string().email().required(),
    })
    return x
  }
  let forgetpassword= useFormik({
    initialValues:{
      email:'',

    },
    validationSchema:validation,
    onSubmit:(values)=> handleSubmit(values)
  })

  return (
    <div>ForgetPassword</div>
  )
}
