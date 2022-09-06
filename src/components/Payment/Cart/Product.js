import React, { useContext } from 'react'
import Context from '../../../context/Context'

export default function Product(props) {
    const { prodId, img, name, code, price, editCart, total, qty, disabled } = props;

    const context = useContext(Context);
    const { addToCart, removeFromCart } = context;

    const add = (e) => {
        if (e.target.id === '1') {
            addToCart(qty, 1);
        }
        else if (e.target.id === '2') {
            addToCart(qty, 2);
        }
        else {
            console.error("error")
        }
    }

    const remove = (e) => {
        if (e.target.id === '1') {
            removeFromCart(qty, 1);
        }
        else if (e.target.id === '2') {
            removeFromCart(qty, 2);
        }
        else {
            console.error("error")
        }
    }


    return (
        <div>
            <div className="d-flex justify-content-center mt-3 w-75">
                <img className='rounded-5' src={process.env.PUBLIC_URL + `/images/${img}`} width="50px" height="50px" alt={name} />

                <p className='col-8 mx-4 text-start'>{name}
                    <br />
                    <span>{code} {!editCart && <kbd className='ms-3'>qty: {qty}</kbd>}</span>
                </p>


                {editCart && <span className='d-flex'>
                    <button disabled={disabled} id={prodId} onClick={remove} className='btn btn-danger'>-</button>
                    <span className='px-2'>{qty} X ${price}</span>
                    <button id={prodId} onClick={add} className='btn btn-success'>+</button>
                </span>}

                {!editCart && <span className=''>
                    <span className=''>${parseFloat(total).toFixed(2)}</span>
                </span>}
            </div>
        </div>
    )
}
