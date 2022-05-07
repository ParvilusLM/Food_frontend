import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'
import loadable from '@loadable/component'

const DrawerShopCat = loadable( () => import('../composants/DrawerShopCat'));

function Navbar() {
  return (
    <Fragment>
        <nav className='navbar'>
            <div className='container__navbar'>
                <button type='button' className="btn--link shop-nav__button">
                  <span className='span1'>
                    Shop Categories
                    <DrawerShopCat />
                  </span>
                  
                </button>
                <div className='shop-nav__logo'></div>
                <div className='shop-nav__menu'>
                  <ul className="shop-nav__menu-list">
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>New Arrivals</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Cookware</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Kitchen</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Outdoor</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Table</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Pantry</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Gifts</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Five Two</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>Experiences</span>
                      </Link>
                    </li>
                    <li className="shop-nav__menu-item shop-nav__menu-item--sh">
                      <Link to='/' className="shop-nav__menu-link">
                        <span>SCHOOLHOUSE</span>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar