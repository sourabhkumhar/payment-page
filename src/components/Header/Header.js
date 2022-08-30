import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    let cartTab, paymentTab;
    let progress;

    if (location.pathname === '/cart') {
        cartTab = "bg-success text-white";
        progress = 25;
    }
    else if (location.pathname === '/payment') {
        paymentTab = "bg-success text-white"
        cartTab = "bg-success text-white"
        progress = 100;
    }
    else if (location.pathname === '/') {
        paymentTab = "bg-success text-white"
        cartTab = "bg-success text-white"
        progress = 100;
    }
    else if (location.pathname === '/success') {
        paymentTab = "bg-success text-white"
        cartTab = "bg-success text-white"
        progress = 100;
    }
    
    return (
        <>
            <div className="row justify-content-between">
                <h4 className='col-md-8 col-12 mb-5'>Shipping and Payment</h4>

                <div className="col-4 mb-md-0 mb-5">

                    <div className="d-flex justify-content-start">
                        <Link to="/cart" className="text-black">
                            <span className={`material-symbols-outlined border border-success border-3 p-2 rounded-5 ${cartTab}`}>
                                shopping_cart
                            </span>
                        </Link>

                        <div className="col-8">
                            <div className="progress" style={{ height: "2px", marginTop: "22px" }}>
                                <div className={`progress-bar bg-success w-${progress}`} role="progressbar" aria-label="Success example" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <Link to="/payment" className="text-black">
                            <span className={`material-symbols-outlined border border-success border-3 p-2 rounded-5 ${paymentTab}`}>
                                local_shipping
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
