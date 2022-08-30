import React from 'react'
import './Shipping.css'

export default function Shipping() {
    
    return (
        <>
            <h6 className='mt-4'>Shipping information</h6>
            <form action="" method='post' className='row'>
                <div className="col-sm-6 py-2">
                    <input className='myInput' type="email" placeholder='Email' required />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="text" placeholder='Address' required />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="text" placeholder='First name required' />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="text" placeholder='City' required />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="text" placeholder='Last name' required />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="text" placeholder='Post requiredal Code / ZIP' />
                </div>

                <div className="col-sm-6 py-2">
                    <input className='myInput' type="tel" placeholder='Pho requiredne number' />
                </div>

                <div className="col-sm-6 py-2">
                    <select className='myInput' name="" id="">
                        <option value="">-- Country --</option>
                        <option value="India">India</option>
                        <option value="Poland">Poland</option>
                        <option value="Russia">Russia</option>
                    </select>
                </div>

            </form>
        </>
    )
}
