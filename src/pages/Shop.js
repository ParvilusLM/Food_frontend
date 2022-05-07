import React, {Fragment} from 'react'
import loadable from '@loadable/component'

const ContenuSponsorise = loadable( () => import('../composants/ContenuSponsorise'))
const Header = loadable( () => import('../composants/Header'))
const Navbar = loadable( () => import('../composants/Navbar'))
const Banniere = loadable( () => import('../composants/Banniere'))
const Footer = loadable( () => import('../composants/Footer'))

function Shop() {
  return (
    <Fragment>
      <ContenuSponsorise />
      <Header />
      <Navbar />
      <Banniere />
      <h1>Shop</h1>
      <Footer />
    </Fragment>
    
  )
}

export default Shop