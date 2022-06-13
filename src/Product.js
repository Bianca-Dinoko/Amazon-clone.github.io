import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 480,
        }
    }
});

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container >
                <div className='product'>
                    <img src={image}
                        alt='' />
                    <div className='product-info'>
                        <div>
                            <p>{title}</p>
                        </div>

                        <div className='product-rating'>
                            {Array(rating).fill().map((_, i) => (<p>⭐</p>))}

                        </div>
                        <p className='product-price'>
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>

                    </div>


                    <Button variant="contained" size="small" onClick={addToBasket}
                        style={{
                            background: "#f8c14b",
                            border: "1px solid",
                            marginTop: "10px",
                            fontSize: "12px",
                            borderColor: "#a88734 #9c7e31 #846a29",
                            color: "#111",
                            cursor: "pointer",
                            padding: "5px"

                        }}
                        sx={{
                            color: 'red',
                        }}
                    >Add to Basket</Button>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Product