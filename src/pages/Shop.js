import React, {Fragment} from 'react'
import loadable from '@loadable/component'

const ShopNav = loadable( () => import('../composants/ShopNav'))
const Banniere = loadable( () => import('../composants/Banniere'))

function Shop() {
  return (
    <Fragment>
      <ShopNav />
      <Banniere />
      <h1>Shop</h1>
    </Fragment>
    
  )
}

export default Shop