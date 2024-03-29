import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header-logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </Link>
            <div className='header-search'>
                <input
                    className='header-searchInput'
                    type='text' />
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className='header-nav'>
                <Link to={!user && '/login'} style={{ textDecoration: "none" }}>
                    <div onClick={handleAuthentication} className='header-option'>
                        <span className='header-optionLineOne'>Hello, {user?.email} </span>
                        <span className='header-optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Returns</span>
                    <span className='header-optionLineTwo'> & orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionLineTwo'> prime</span>
                </div>
                <Link to='/checkout' style={{ textDecoration: "none" }}>
                    <div className='header-optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header