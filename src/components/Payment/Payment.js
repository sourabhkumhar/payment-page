import React from 'react'
import Footer from '../Footer/Footer'
import Cart from './Cart/Cart'
import Method from './Method/Method'
import Shipping from './Shipping/Shipping'

export default function Payment() {

    return (
        <>
            <div className="row justify-content-around">

                <div className="col-12 col-xl-4">
                    <div className="d-inline">
                        <a href='/' style={{ fontSize: "13px", paddingInline: "50px" }} className="btn btn-success border border-2 rounded-5 py-3 me-2">LOG IN</a>
                        <a href='/' style={{ fontSize: "13px", paddingInline: "50px" }} className="btn border border-2 rounded-5 py-3" disabled>SIGN UP</a>
                    </div>

                    <Shipping />
                </div>

                <div className="col-12 col-xl-4">
                    <Method />
                </div>

                <div className="col-12 col-xl-4">
                    <Cart />
                </div>


            </div>

            <Footer />
        </>
    )
}
