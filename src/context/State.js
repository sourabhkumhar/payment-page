import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
    const [newQty1, setNewQty1] = useState(1)
    const [newQty2, setNewQty2] = useState(1)
    const [free, setFree] = useState()

    const deliveryFree = (yon) => {     // yon == yes or no
        if(yon === true) {
            setFree(true)
        }
        else {
            setFree(false)
        }
    }

    const addToCart = (qty, id) => {
        if (id === 1) {
            setNewQty1(qty + 1)
        }
        else if (id === 2) {
            setNewQty2(qty + 1);
        }
        else {
            console.error('Error');
        }
    }

    const removeFromCart = (qty, id) => {
        if (id === 1) {
            setNewQty1(qty - 1);
        }
        else if (id === 2) {
            setNewQty2(qty - 1);
        }
        else {
            console.error('Error');
        }
    }
    
    return (

        <Context.Provider value={{ addToCart, removeFromCart, newQty1, newQty2, deliveryFree, free }} >
            {props.children}
        </Context.Provider >
    )
}

export default State;