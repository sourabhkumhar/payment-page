import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border border-bottom-1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" /></a>

                    <div><span className='text-warning'>E-</span>Shop</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-lg-flex justify-content-between w-100 py-4">
                            <div className=""></div>

                            <div className='d-lg-flex d-flex w-lg-25 justify-content-lg-around justify-content-center'>
                                <a href='/' className='py-lg-0 px-3 text-decoration-none text-black'>Mens</a>
                                <a href='/' className='py-lg-0 px-3 text-decoration-none text-black'>Women</a>
                                <a href='/' className='py-lg-0 px-3 text-decoration-none text-black'>Kids</a>
                            </div>

                            <div className='d-flex justify-content-around'>
                                <div><span className="material-symbols-outlined mx-3">search</span></div>
                                <div><span className="material-symbols-outlined mx-3">shopping_cart</span></div>
                                <div><span className="material-symbols-outlined mx-3">person</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
