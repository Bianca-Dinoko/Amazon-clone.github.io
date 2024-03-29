import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useNavigate } from "react-router-dom"

function SubTotal() {
    const navigate = useNavigate();
    const [{ basket }] = useStateValue();
    return (
        <div className='Subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal({basket.length} items): <strong>{value}</strong>

                        </p>
                        <small className='Subtotal-gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>

    )
}

export default SubTotal