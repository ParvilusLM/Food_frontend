import React, {Fragment} from 'react'
import './styles/Food.scss'
import loadable from '@loadable/component'

const FragFood = loadable(() => import('../fragments/FragFood'))

function Food() {
  return (
    <Fragment>
      <FragFood />
    </Fragment>
    
  )
}

export default Food