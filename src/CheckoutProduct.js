import React from 'react'
import './CheckoutProduct.css'
import Button from '@mui/material/Button';
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={image} alt='' />

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProuct-price'>
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className='checkoutProduct-rating'>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>

                <Button variant="contained" size="small" onClick={removeFromBasket}
                    style={{
                        background: "#f8c14b",
                        border: "1px solid",
                        marginTop: "10px",
                        fontSize: "12px",
                        borderColor: "#a88734 #9c7e31 #846a29",
                        color: "#111",
                        cursor: "pointer",
                        padding: "5px"

                    }} >Remove from Basket</Button>
            </div>

        </div>
    )
}

export default CheckoutProduct