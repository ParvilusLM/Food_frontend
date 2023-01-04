import React, {Fragment} from 'react'
import loadable from '@loadable/component'

const FragDrink52 = loadable(() => import('../fragments/FragDrink52'))


function Drink52() {
  return (
    <Fragment>
      <FragDrink52 />
    </Fragment>
  )
}

export default Drink52