import React from 'react'

let deliveryMethod;
let paymentMethod;
setInterval(() => {
    deliveryMethod = localStorage.getItem('Delivery Method')
    paymentMethod = localStorage.getItem('Payment Method')
})

const Success = () => {
  return (
    <div align="center">
        <h1 className='text-success' style={{fontSize: "100px"}}>Success!!!</h1>
        <p style={{fontSize: "35px"}}>The product will be delivered in 5 days.</p>

        <p>Payment done by {paymentMethod} and product will be deliver by {deliveryMethod}</p>

    </div>
  )
}

export default Success
