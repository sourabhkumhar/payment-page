import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation();

    return (
        <>
            {(location.pathname === '/payment' || location.pathname === '/') && <div className="row justify-content-between mt-3">
                <Link to="/cart" className={`col-md-6 col-12 mb-5 d-flex text-decoration-none text-black`}><span className="material-symbols-outlined">keyboard_arrow_left</span> back</Link>

                <div className="col-6 mb-md-0 mb-5">
                    <div className='d-md-flex justify-content-end mt-4'>
                        <Link className="col-md-6 btn border border-dark border-3 p-3 m-2 rounded-5" to="/cart">CONTINUE SHOPPING</Link>
                        <Link className="text-decoration-none text-white col-md-6 btn btn-success p-3 m-2 rounded-5" to='/success'>PROCEED TO PAYMENT</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}
