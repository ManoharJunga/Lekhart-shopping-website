import React from 'react'
import './Header.css'
import Lekhart from './Lekhart.jpeg'
import 'material-icons/iconfont/material-icons.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {

  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>

          <Link to="/" >
            <img src={Lekhart} alt="" />
          </Link>
         
      <div className='header_search'>
        <input className='header_searchInput' type="text" />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'  >
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/checkout">
        <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>

        </Link>
        
        <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Subscription</span>
        </div>
        <Link to="/checkout">
          <div className='header_optionBasket'>
            <ShoppingCartIcon />
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
