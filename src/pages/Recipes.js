import React, {Fragment} from 'react'
import loadable, { loadableReady } from '@loadable/component'

const FragRecipes = loadable(() => import('../fragments/FragRecipes'))

function Recipes() {
  return (
    <Fragment>
      <FragRecipes />
    </Fragment>
  )
}

export default Recipes