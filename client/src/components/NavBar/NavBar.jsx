import React,
{useState} from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Cart from '../Cart/Cart';
import './NavBar.scss'

function NavBar() {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
              <div className="item">
                <img src="/img/en.png" alt="flag" />
                <KeyboardArrowDownIcon/>
              </div>
              <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
              </div>
              <div className="item">
                <Link className='link' to='/products/1'>Men</Link>
              </div>
              <div className="item">
                <Link className='link' to='/products/2'>Women</Link>
              </div>
              <div className="item">
                <Link className='link' to='/products/3'>Childrem</Link>
              </div>
              <div className="item">
                <Link className='link' to='/products/4'>Accesories</Link>
              </div>
            </div>
            <div className='center'>
              <div className="item">
                <Link className='link' to='/'>LAMASTORE</Link>
              </div>
            </div>
            <div className='right'>
              <div className="item">
                <Link className='link' to='/'>Home</Link>
              </div>
              <div className="item">
                <Link className='link' to='/'>About</Link>
              </div>
              <div className="item">
                <Link className='link' to='/'>Contact</Link>
              </div>
              <div className="item">
                <Link className='link' to='/'>Store</Link>
              </div>
              <div className="icons">
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <ShoppingCartOutlinedIcon/>
                  <span>0</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default NavBar
