import React, {Fragment} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import './styles/DrawerPanier.scss'
import { useSelector } from 'react-redux'
import loadable from '@loadable/component';

const ProductInCartCard = loadable(() => import('../composants/ProductInCartCard'))

function DrawerPanier() {
  const [state, setState] = React.useState({right: false});
  const produitsP= useSelector(state => state.panier.produits)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const containerDrawerP = (anchor) => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className='container--box-Panier'
      
    >
      <div className='panel--basket-preview'>
        <button onClick={toggleDrawer(anchor, false)} className="close">
          <span className="close-icon"></span>
        </button>
        <h4 className='heading-basket' id='basket-prevPanelHeading'>Your Cart</h4>
        <div className='info__shipping'>
          <p className="text__shipping">You're $149 away from free shipping</p>
          <div className="decor__shipping"></div>
        </div>
        <div className='info__produits'>
          {produitsP.length ===0 && 
            <p className="panier-vide">
              Your shopping cart is empty. Let's fix that!
              <Link className="lien" to='/'>Shop now</Link>
            </p>
          }

          {produitsP.length !==0 &&
            <div className='wrapper--products'>
              <ul>
                {produitsP.map((item, index) => (
                  <li key={index}>
                    <ProductInCartCard donnees={item} />
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className='info__subtotal'>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>$0.00</span>
          </div>
          <div className="wrapper-button">
            <button onClick={toggleDrawer(anchor, false)} className="btn btn--default checkout--b" >
              <Link className="lien lien--checkout" to='/checkout'>Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <Fragment>
      <div className="global__wrapper-drawerP">
        {['right'].map((anchor) => (
          <div key={anchor}>
            <span onClick={toggleDrawer(anchor, true)} className="fa-solid fa-cart-shopping"></span>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              className='drawerPanier'
            >
              {containerDrawerP(anchor)}
            </Drawer>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default DrawerPanier