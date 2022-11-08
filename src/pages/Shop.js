import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import './styles/Shop.scss'

const ShopNav = loadable( () => import('../composants/ShopNav'))
const Banniere = loadable( () => import('../composants/Banniere'))
const FragShop = loadable( () => import('../fragments/FragShop'))

const typeShop= true;
function Shop() {
  return (
    <Fragment>
      <ShopNav />
      <Banniere typeShop={typeShop}/>
      <FragShop />
    </Fragment>
    
  )
}

export default Shop