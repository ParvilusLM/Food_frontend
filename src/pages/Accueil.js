import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import './styles/Accueil.scss'

const Banniere = loadable( () => import('../composants/Banniere'))
const FragAccueil = loadable( () => import('../fragments/FragAccueil'))

const typeShop= false;

function Accueil() {
  return (
    <Fragment>
      <Banniere typeShop={typeShop}/>
      <FragAccueil />
    </Fragment>
  )
}

export default Accueil