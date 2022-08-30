import React, { useContext } from 'react';
import Context from '../../../context/Context';

export default function Method() {
    const context = useContext(Context);
    const { free } = context;
    const currDel = free;


    const paymentStyle = {
        width: "26%",
        cursor: "pointer"
    }
    const deliveryStyle = {
        width: "41%",
        cursor: "pointer"
    }

    const paymentMethod = (e) => {
        localStorage.setItem('Payment Method', e.target.id)
    }

    const deliveryMethod = (e) => {
        localStorage.setItem('Delivery Method', e.target.id)
    }

    return (
        <>
            <h6 className='mt-xl-0 mt-5 ms-5'>Payment method</h6>

            <div className="row mt-4 justify-content-center">

                <img onClick={paymentMethod} width="50px" height="50px" id="PayPal" className='col-4 py-3 m-1 border rounded-5 text-center' src={process.env.PUBLIC_URL + "/images/paypal.svg"} alt="" style={paymentStyle} />

                <img width="50px" height="50px" id="Visa" src={process.env.PUBLIC_URL + "/images/visa.svg"} alt="" onClick={paymentMethod} className='col-4 py-3 m-1 border rounded-5 text-center' style={paymentStyle} />

                <img width="50px" height="50px" id="Mastercard" src={process.env.PUBLIC_URL + "/images/mastercard.svg"} alt="" onClick={paymentMethod} className='col-4 py-3 m-1 border rounded-5 text-center' style={paymentStyle} />

                <img width="50px" height="50px" id="Maestro" src={process.env.PUBLIC_URL + "/images/maestro.svg"} alt="" onClick={paymentMethod} className='col-4 py-3 m-1 border rounded-5 text-center' style={paymentStyle} />

                <img width="50px" height="50px" id="Discover" src={process.env.PUBLIC_URL + "/images/discover.svg"} alt="" onClick={paymentMethod} className='col-4 py-3 m-1 border rounded-5 text-center' style={paymentStyle} />

                <img width="50px" height="50px" id="iDeal" src={process.env.PUBLIC_URL + "/images/ideal.svg"} alt="" onClick={paymentMethod} className='col-4 py-3 m-1 border rounded-5 text-center' style={paymentStyle} />
            </div>

            <h6 className='mt-5 ms-5'>Delivery method</h6>

            <div className="row mt-4 justify-content-center">

                <div onClick={deliveryMethod} id="" className="col-6 m-2 border rounded-5 text-center" style={deliveryStyle}>
                    <img width="50px" height="50px" id="InPost" src={process.env.PUBLIC_URL + "/images/inpost.svg"} alt="" />
                    <span className='ms-5'>{currDel ? 'Free' : '$20.00'}</span>
                </div>

                <div onClick={deliveryMethod} id="" className="col-6 m-2 border rounded-5 text-center" style={deliveryStyle}>
                    <img width="50px" height="50px" id="dpd" src={process.env.PUBLIC_URL + "/images/dpd.svg"} alt="" />
                    <span className='ms-5'>{currDel ? 'Free' : '$12.00'}</span>
                </div>

                <div onClick={deliveryMethod} id="" className="col-6 m-2 border rounded-5 text-center" style={deliveryStyle}>
                    <img width="50px" height="50px" id="DHL" src={process.env.PUBLIC_URL + "/images/dhl.svg"} alt="" />
                    <span className='ms-5'>{currDel ? 'Free' : '$15.00'}</span>
                </div>

                <div onClick={deliveryMethod} id="" className="col-6 m-2 border rounded-5 text-center" style={deliveryStyle}>
                    <img width="50px" height="50px" id="FedEx" src={process.env.PUBLIC_URL + "/images/fedex.svg"} alt="" />
                    <span className='ms-5'>{currDel ? 'Free' : '$10.00'}</span>
                </div>
            </div>
        </>
    )
}
