import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './styles/ShopNav.scss'
import loadable from '@loadable/component'

const DrawerShopCat = loadable( () => import('../composants/DrawerShopCat'));

function ShopNav() {
  return (
    <Fragment>
        <nav className="shop--nav">
            <div className="shop--nav-container">
                <button type='button' className="btn--link shop-nav__button">
                  <span className='span1'>
                    Shop Categories
                    <DrawerShopCat />
                  </span>
                  
                </button>
                <ul className="shop--nav-list">
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>New Arrivals</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Cookware</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Appliances</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Kitchen</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Table</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Outdoor</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Pantry</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>Gifts</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>DANSK</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>FIVE.TWO</span>
                        </Link>
                    </li>
                    <li className="shop--nav-list--item">
                        <Link className="nav--lien" to=''>
                            <span>SCHOOLHOUSE</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav> 
    </Fragment>
  )
}

export default ShopNav