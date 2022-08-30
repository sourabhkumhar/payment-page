import React, { useContext } from 'react'
import Context from '../../../context/Context';
import { useLocation } from 'react-router-dom'
import Product from './Product';

export default function Cart() {
    const location = useLocation();

    const context = useContext(Context);
    const { newQty1, newQty2, deliveryFree } = context;

    let editCart = false;
    if (location.pathname === '/cart') {
        editCart = true;
    }

    let cartTotal = 0;
    let minForFree = 0;

    const products = {
        product1: {
            id: 1,
            qty: newQty1,
            img: "tshirt_white.jpg",
            name: "T-Shirt Summer Vibes",
            code: "#261311",
            price: "89.99"
        },
        product2: {
            id: 2,
            qty: newQty2,
            img: "tshirt_black.jpg",
            name: "Basic Slim Fit T-Shirt",
            code: "#212315",
            price: "69.99"
        }
    }
    const prod1 = products.product1
    const prod2 = products.product2

    return (
        <>
            <span className='d-none'>
                {cartTotal = ((prod1.price * prod1.qty) + (prod2.price * prod2.qty))}
                {minForFree = parseFloat(190 - cartTotal).toFixed(2)}
                {setTimeout(() => {
                    if (minForFree <= 0) {
                        deliveryFree(true)
                    }
                    else {
                        deliveryFree(false)
                    }
                })}
            </span>

            <h6 className="mt-lg-0 mt-5">Your cart</h6>

            <div className="block mt-5" align="center">

                <Product prodId={prod1.id} qty={prod1.qty} img={prod1.img} name={prod1.name} code={prod1.code} price={prod1.price} total={prod1.price * prod1.qty} editCart={editCart} disabled={prod1.qty <= 0} />

                <Product prodId={prod2.id} qty={prod2.qty} img={prod2.img} name={prod2.name} code={prod2.code} price={prod2.price} total={prod2.price * prod2.qty} editCart={editCart} disabled={prod2.qty <= 0} />


                <div className="d-flex justify-content-around w-50 rounded-5 p-3 mt-3" style={{ backgroundColor: "lightgrey" }}>
                    <span>Total cost</span>
                    <span>${parseFloat(cartTotal).toFixed(2)}</span>
                </div>


                <div className='mt-5'>
                    {minForFree > 0 ? <span>You are ${minForFree} away from free shipping</span> : <span>Your shipping is free now</span>}
                </div>
            </div>
        </>
    )
}
