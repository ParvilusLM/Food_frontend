import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import './styles/Shop.scss'

const ShopNav = loadable( () => import('../composants/ShopNav'))
const Banniere = loadable( () => import('../composants/Banniere'))

const typeShop= true;
function Shop() {
  return (
    <Fragment>
      <ShopNav />
      <Banniere typeShop={typeShop}/>
      <h1>Shop</h1>
    </Fragment>
    
  )
}

export default Shop